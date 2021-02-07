import React from 'react'

import styles from './Tweet.module.css'
import TwitterMedia from './TwitterMedia/TwitterMedia'


export default function Tweet(props) {
    return (
        <div className={styles.twItem}>

            <div
                className={styles.twHeader}
                    onClick={() => {
                        props.redirectTo(props.twLink)
                    }}
            >
                    <img 
                        className={styles.userPhoto}
                        src={props.twUserPhoto}>
                    </img>
                    <h3 className={styles.twUserName}>@{props.twUser}</h3>
            </div>


            <div className={styles.twTextDiv}>
                <a
                    className={styles.description}>
                    {props.twText}
                </a>
            </div>
                
            {props.twMedia != null ?
                (
                        <TwitterMedia
                            redirectTo={props.redirectTo}
                            twMedia={props.twMedia}
                            className={styles.twMedia}
                        />
                )
        
                    : 
                    
                (
                    <div></div>
                )
            }
        
        </div>
    )
}