import styles from '../styles/Home.module.css'

import { useSession, signIn, signOut } from "next-auth/react"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

export default function Navbar() {
    const { data: session } = useSession()
    
    if(session) {
        return (
            <div className={styles.navbar}>
                <a href='/'>Home</a>
                <p>Signed in as {session.user.email}</p>
                <button onClick={() => {signOut()}}>Sign Out</button>
            </div>
        )
    }
    else {
        return (
            <div className={styles.navbar}>
                <a href='/'>Home</a>
                <button onClick={() => {signIn()}}>Sign In</button>
            </div>
        )
    }
}
