import React from 'react'
import styles from './Quote.module.css'


export default function Quote(props) {
    return (
        <div className={styles.quoteItem}>
                
            <h3 className={styles.quoteText}> "{props.quote}" </h3>

            <div className={styles.quoteAuthorDiv}>
                <h4
                    className={styles.author}>
                    — {props.author}
                </h4>
            </div>

        </div>
    )
}