import React, { Component, useState, useEffect } from 'react';
import Next from 'next';
import axios from "axios";
import ReactLoading from 'react-loading';
import {getDayColor} from '../../utils/dayMomentSystem'

import Random from '../Item/random';
import Quote from '../Item/Quote/Quote'
import Tweet from '../Item/Tweet/Tweet'
import New from '../Item/New/New'


import styles from './Scroll.module.css';
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
        .catch((error) => { /*console.log(error);*/ });
    }
   


    if(props.timelineOption.request != lastRequest){
        getData();
        setLastRequest(props.timelineOption.request);
    }

    return( 
        <div className={styles.scroller} id={'timeline'} itemID={'timeline'}>
    
            {
                data !=null?
                    data.map((element, key) =>{
                        switch (props.timelineOption.name) {
                            case ListItems[0].name:
                                return (
                                    <Tweet
                                        key={key}
                                
                                        twText={element.fullText}
                                        twMedia={element.mediaUrl}
                                        twUser={element.user}
                                        twUserPhoto={element.userPhoto}
                                        twLink={element.link} 
                                    />
                                )
                            case ListItems[1].name:
                                return(
                                    <New
                                        key={key}
                                
                                        type={props.timelineOption.name}
                                        title={element.title}
                                        description={element.description}
                                        image={element.urlToImage}
                                        url={element.url}
                                    />
                                )
                            case ListItems[2].name:
                                return(
                                    <Random
                                        type={props.timelineOption.name}
                                        title={element.title}
                                        description={element.description}
                                        image={element.urlToImage}
                                        url={element.url}

                                        key={key}

                                        quote={element.text}
                                        author={element.author}

                                        twText={element.fullText}
                                        twMedia={element.mediaUrl}
                                        twUser={element.user}
                                        twUserPhoto={element.userPhoto}
                                        twLink={element.link} 
                                    />
                                )
                            case ListItems[3].name:
                                return(
                                    <Quote
                                    key={key}
                                    quote={element.text}
                                    author={element.author}
                                    />
                                )

                            default:
                                return(
                                <ReactLoading
                                    type={"bubbles"}
                                    color={"#C4C4C4"}
                                    className={styles.loading}
                                />)
                        }
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
