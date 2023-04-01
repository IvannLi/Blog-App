import { prisma } from '../../server/db/client'
import { getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

async function post(req, res) {
    const session = await getServerSession(req, res, authOptions)
    if (!session) {
        res.status(401).json({ error: 'Unauthorized' })
        return
    }

    const prismaUser = await prisma.user.findUnique({
        where: { email: session.user.email },
    })

    if (!prismaUser) {
        res.status(401).json({ error: 'Unauthorized' })
        return
    }

    const { content } = req.body
    const post = await prisma.post.create({
        data: {
            content,
            userId: prismaUser.id,
        },
    })
    res.status(201).json(post)
}

export default async function handler(req, res) {
    const { method } = req

    switch (method) {
        case 'POST':
            post(req, res)
            break
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}