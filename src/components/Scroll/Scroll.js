import React, {} from 'react';
import Next from 'next';

import styles from './Scroll.module.css';
import Item from '../Item/Item';

import newsController from '../../controllers/newsController';

export const setTimeLineTo = (option) =>{
    switch (option) {
        case "News":
            newsController.getAllgoodNews();
            break;
        /*
        case "Twits":
            newsController.getAllgoodNews();
            break;
        case "Quotes":
            newsController.getAllgoodNews();
            break;
        */
        default:
            break;
    }
}

export default function  Scroll() {
    

   
    setTimeLineTo("News")//untill we don't have an random menu option, we will start with this one
    return (
        <div className={styles.scroller}>
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
            <Item
                title="TESTE"
                description="Descrição"
                image="https://nypost.com/wp-content/uploads/sites/2/2021/01/super-bowl-ad-dropouts-1.jpg?quality=90&strip=all&w=1200" />
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