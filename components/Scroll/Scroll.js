import React, {} from 'react';
import Next from 'next';

import styles from './Scroll.module.css';
import Item from '../Item/Item';

export default function  Scroll() {
    

    return (
        <div className={styles.scroller}>
            <meta name="theme-color" content="invalid"></meta>
            <style jsx global >{`  
          
            ::-webkit-scrollbar{
                position: relative;
                background: rgba(0, 0, 0, .1);
                width: 0.6rem;
                border-radius: 5px;
                cursor: pointer;
                
                margin-left: 2vw;
            }
            
            /* Track */
            ::-webkit-scrollbar-track {
                background: #2d2d2d10;
            }
            
            /* Handle */
            ::-webkit-scrollbar-thumb {
                cursor: pointer;
                background: #2d2d2d30;
                border-radius: 5px;

            }
            
            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
                background: #2d2d2d50;
            }
            
            @media(max-width: 768px){
                ::-webkit-scrollbar{
                    
                }
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