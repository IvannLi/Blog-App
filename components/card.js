import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Card({ content, date }){
    const [comment, openComment] = useState(false)
    
    const handleComment = () => {
        openComment(!comment)
    }

    return (
        <div className={styles.cardCont}>
            <p className={styles.date}>{date}</p>
            <p>{content}</p>
            {comment == false ? <button onClick={()=>{handleComment()}}>Comment</button> :null}
            { 
                comment ?
                <div className={styles.commentCont}>
                    <textarea placeholder='Comment Something'/>
                    <button onClick={()=>{handleComment()}}>Submit</button>
                </div>
                :null
            }
        </div>
    )
}