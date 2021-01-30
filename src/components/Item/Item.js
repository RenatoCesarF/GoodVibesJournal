import React from 'react';
import { useRouter,Router } from 'next/router'
import Next from 'next';

import styles from './Item.module.css';
import { useEffect } from 'react';
import getGoodNews from '../../pages/api/goodNews';

function redirectToNew(url) {
    window.open(url)
}

export default function Item(props) {
    if (props.type == "News") {
        return (
            <div className={styles.newItem}>
                <div className={styles.newHeader}>

                    <img 
                        onClick={() => { redirectToNew(props.url) }}
                        className={styles.newImage}
                        src={props.image} >
                    </img>

                    <h3 onClick={() => { redirectToNew(props.url) }} className={styles.title}>{props.title}</h3>
                </div>


                <div className={styles.descriptionDiv}>
                    <a
                        className={styles.newDescription}>
                        {props.description}
                    </a>
                </div>


            </div>
            );
    }

    else if (props.type == "Quotes") {
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
            );
    }
}