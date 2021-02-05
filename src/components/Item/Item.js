import { useRouter,Router } from 'next/router'
import React,{ useEffect ,useState} from 'react';
import Next from 'next';

import styles from './Item.module.css';
import getGoodNews from '../../pages/api/goodNews';

import TwitterMedia from '../TwitterMedia/TwitterMedia'

function redirectTo(url) {
    window.open(url)
}


export default function Item(props) {
    
    if (props.type == "News") {
        return (
            <div className={styles.newItem}>
                <div className={styles.newHeader}>

                    <img 
                        onClick={() => { redirectTo(props.url) }}
                        className={styles.newImage}
                        src={props.image} >
                    </img>

                    <h3 onClick={() => { redirectTo(props.url) }} className={styles.title}>{props.title}</h3>
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
    
    else if (props.type == "Tweets") {
     
        return (
        <div className={styles.twItem}>

            <div
                className={styles.twHeader}
                    onClick={() => {
                        redirectTo(props.twLink)
                        console.log(props.twMedia)
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
                    className={styles.newDescription}>
                    {props.twText}
                </a>
            </div>
                
            {props.twMedia != null ?
                (
                        <TwitterMedia
                            redirectTo={redirectTo}
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
        );
    }
}
