import React from 'react';
import { useRouter,Router } from 'next/router'
import Next from 'next';

import styles from './Item.module.css';
import { useEffect } from 'react';
import getGoodNews from '../../pages/api/goodNews';

function redirectToNew(url) {
    window.open(url)
}

export default function  Item(props) {
    return (
        <div className={styles.item}>
            <div className={styles.newHeader}>

                <img 
                    onClick={() => { redirectToNew(props.url) }}
                    className={styles.image}
                    src={props.image} >
                
                </img>

                <h3 onClick={() => { redirectToNew(props.url) }} className={styles.title}>{props.title}</h3>
            </div>


            <div className={styles.descriptionDiv}>
                <a
                    className={styles.description}>
                    {props.description}
                </a>
            </div>


        </div>
    );
}