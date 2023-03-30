import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Card({ content, date }){
    const [comment, openComment] = useState(false)
    const [text, setText] = useState('')
    
    const handleComment = () => {
        openComment(!comment)
    }

    const handleSubmit = () => {
        console.log('submit')
        openComment(false)
    }

    return (
        <div className={styles.cardCont}>
            <p className={styles.date}>{date}</p>
            <p>{content}</p>
            {
                comment == false ? <button onClick={()=>{handleComment()}}>Comment</button> 
            :
                <div className={styles.commentCont}>
                    <textarea 
                        placeholder='Comment Something'
                        value={text}
                        onChange={(event) => {setText(event.target.value)}}
                    />
                    <button onClick={()=>{handleSubmit()}}>Submit</button>
                </div>
            }
            
        </div>
    )
}