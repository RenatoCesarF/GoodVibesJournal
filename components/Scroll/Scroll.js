import React, {} from 'react';
import Next from 'next';

import styles from './Scroll.module.css';
import Item from '../Item/Item';

export default function  Scroll() {
    

    return (
        <div className={styles.scroller}>
            <style jsx global >{`       
            ::-webkit-scrollbar{

                position: relative;
                background: rgba(0, 0, 0, .1);
                width: 9px;
                border-radius: 4px;
                top: 0;
                z-index: 2;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.25s linear;
                margin-left: 2vw;
               
            }
           `}
            </style>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>

        </div>
    );
}

/*

*/