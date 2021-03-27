import React, { Component, useState, useEffect } from 'react';
import Next from 'next';
import axios from "axios";
import ReactLoading from 'react-loading';


import Random from '../Item/random';
import Quote from '../Item/Quote/Quote'
import Tweet from '../Item/Tweet/Tweet'
import New from '../Item/New/New'


import styles from './Scroll.module.css';
import ScrollToTop from '../ScrollToTop/scrollToTop';
import ListItems from '../../utils/menuItems';
import getHost from '../../utils/getHost';


export default function Scroll(props) {
    

    let tweets = []
    let news = []
    let random = []
    let quotes = []

    axios.get(`http://localhost:3000/api/quotes`)
    .then((res) => {
        quotes = res.data.data;
    })
    // axios.get(`/api/${ListItems[0].request}`)
    // .then((res) => {
    //     tweets = res.data.data;
    // })

    // axios.get(`/api/${ListItems[1].request}`)
    // .then((res) => {
    //     news = res.data.data;
    // })

    // axios.get(`/api/${ListItems[2].request}`)
    // .then((res) => {
    //     random = res.data.data;
    // })

    
    
    return( 
            <div className={styles.scroller}>
                <style> 
                    { 
                        `
                        ::-webkit-scrollbar{
                            position: relative;
                            width: 0.6rem;
                            border-radius: 5px;
                            cursor: pointer;
                            margin-left: 2vw;
                        }
                        
                        //Track
                        ::-webkit-scrollbar-track {
                            background: #2d2d2d10;
                        }
                        
                        // Handle
                        ::-webkit-scrollbar-thumb {
                            cursor: pointer;
                            background: #2d2d2d70;
                            border-radius: 5px;
                        }
                        
                        // Handle on hover 
                        ::-webkit-scrollbar-thumb:hover {
                            background: #2d2d2d50;
                        }
                        `
                    }
                </style>
        
                <ScrollToTop/> 
                
                {
                    props.timelineOption == ListItems[3].name ?
                        
                        quotes.map((x, key) =>
                            <Quote
                                key={key}
                                quote={x.text}
                                author={x.autho}
                            />  
                        )
                   
                    :
                        (
                        <ReactLoading type={"bubbles"}
                        color = { "#C4C4C4" }
                        className = { styles.loading }
                        />
                    )
        
        
        
                }
        
            </div>
    )

}