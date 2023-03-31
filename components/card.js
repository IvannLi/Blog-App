import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Card({ content, date, onSubmit }){
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
                comment == false ? 
                <div className={styles.commentButtonCont}>
                    <button onClick={()=>{handleComment()}}>
                        Comment
                    </button> 
                </div>
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
            {/* <div className={styles.commentSection}>
                this is a comment
            </div> */}
        </div>
    )
}