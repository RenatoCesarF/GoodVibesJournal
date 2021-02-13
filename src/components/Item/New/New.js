import React from 'react'
import styles from './New.module.css'

export default function New(props) {
    
    return (
        <div className={styles.newItem}>
            <div className={styles.newHeader}>

                <img 
                    onClick={() => {window.open(props.url) }}
                    className={styles.newImage}
                    src={props.image} >
                </img>

                <h3 onClick={() => {window.open(props.url) }} className={styles.title}>{props.title}</h3>
            </div>


            <div className={styles.descriptionDiv}>
                <a
                    className={styles.newDescription}>
                    {props.description}
                </a>
            </div>


        </div>
    )
}