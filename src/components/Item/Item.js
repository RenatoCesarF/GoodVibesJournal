import React from 'react';
import Next from 'next';

import styles from './Item.module.css';
import { useEffect } from 'react';
import getGoodNews from '../../pages/api/goodNews';

export default function  Item(props) {
    
    

    return (
        <div className={styles.item}>

            <h3 className={styles.title}>{props.title}</h3>

            <a
                className={styles.description}>
                {props.description}
            </a>

            <img
                className={styles.image}
                src={props.image} >
            
            </img>
        </div>
    );
}