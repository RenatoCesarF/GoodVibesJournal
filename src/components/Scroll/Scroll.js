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

    const [data, setData] = useState([])
    const [lastRequest, setLastRequest] = useState("")
 

    function getData() {
        setData(null); 
        console.log("Getting data")
        axios.get(`/api/${props.timelineOption.request}`)
        .then((res) => {
            setData(res.data.data)
        })
        .catch((error) => { console.log(error); });
    }
   


    if(props.timelineOption.request != lastRequest){
        getData();
        setLastRequest(props.timelineOption.request);
    }

    return( 
        <div className={styles.scroller} id={'timeline'} itemID={'timeline'}>
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
            {
                data !=null?
                    data.map((x, key) =>{
                        return  props.timelineOption.name == ListItems[0].name?
                            <Tweet
                                key={key}
                        
                                twText={x.fullText}
                                twMedia={x.mediaUrl}
                                twUser={x.user}
                                twUserPhoto={x.userPhoto}
                                twLink={x.link} 
                            />
                            :
                        props.timelineOption.name == ListItems[1].name?
                            <New
                                key={key}
                        
                                type={props.timelineOption.name}
                                title={x.title}
                                description={x.description}
                                image={x.urlToImage}
                                url={x.url}
                            />
                            :
                        props.timelineOption.name == ListItems[2].name?
                            <Random
                                type={props.timelineOption.name}
                                title={x.title}
                                description={x.description}
                                image={x.urlToImage}
                                url={x.url}

                                key={key}

                                quote={x.text}
                                author={x.author}

                                twText={x.fullText}
                                twMedia={x.mediaUrl}
                                twUser={x.user}
                                twUserPhoto={x.userPhoto}
                                twLink={x.link} 
                            />:
                        props.timelineOption.name == ListItems[3].name?
                            <Quote
                                key={key}
                                quote={x.text}
                                author={x.author}
                            />
                    :
                    <ReactLoading
                        type={"bubbles"}
                        color={"#C4C4C4"}
                        className={styles.loading}
                    />
                        
                    })
                :    
                <ReactLoading
                    type={"bubbles"}
                    color={"#C4C4C4"}
                    className={styles.loading}
                />
            }

        </div>
    )

}
