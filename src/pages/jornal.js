import axios from "axios";
import React,{useState} from 'react';
import Head from 'next/head';

import Random from '../components/Item/random';
import Quote from '../components/Item/Quote/Quote'
import Tweet from '../components/Item/Tweet/Tweet'
import New from '../components/Item/New/New'

import Header from'../components/Header/Header';
import Menu from'../components/Menu/Menu';
import { getDayFase, getDayColor } from '../utils/dayMomentSystem';
import styles from"../styles/jornal.module.css"
import ListItems from  '../utils/menuItems';
import getHost from "../utils/getHost";

const HOST = getHost();
export async function getStaticProps(context){
    let tweets;
    let quotes;
    let random;
    let news;
    
    await axios.get(`${HOST}/api/${ListItems[0].request}`)
    .then((res) => {
        tweets = res.data.data;
    }).catch((error) => { console.log(error); });

    await axios.get(`${HOST}/api/${ListItems[1].request}`)
    .then((res) => {
        news = res.data.data;
    })
    .catch((error) => { console.log(error); });

    await axios.get(`${HOST}/api/${ListItems[2].request}`)
    .then((res) => {
        random = res.data.data;
    }).catch((error) => { console.log(error); });

    await axios.get(`${HOST}/api/${ListItems[3].request}`)
    .then((res) => {
        quotes = res.data.data;
    }).catch((error) => { console.log(error); });

    return{
        props:{
            quotes,
            random,
            tweets,
            news,
        }
    }
}

export default function Jornal(props){
    const [timelineOption, setTimelineOption] = useState(ListItems[2].name)

    function listenMenu(selectedOption){
        setTimelineOption(selectedOption)
    }
    return (

            <div>
                <Head>
                    <link rel="shortcut icon" href='../../static/icon_unfilled.ico'/>
                    <title>Good Vibes Jornal</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>

                <style jsx global >
                    {
                        `       
                        ::-webkit-scrollbar{
                            position: relative;
                            width: 0.6rem;
                            border-radius: 5px;
                            cursor: pointer;
                            margin-left: 2vw;
                        }
                        
                        /* Track */
                        ::-webkit-scrollbar-track {
                            ${getDayColor()}
                        }
                        
                        /* Handle */
                        ::-webkit-scrollbar-thumb {
                            cursor: pointer;
                            background: #2d2d2d70;
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
                        html,body{
                                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

                                ${getDayColor()}
                                margin: 0;
                                padding: 0;
                                background-size:100%;
                                width: 100%;
                            }
                        `
                    }
                </style>
                    
                <Header/>

                <Menu listenMenu={listenMenu}/>

                <div className={styles.scroller}>

                {
              
                    timelineOption == "Random"? 
                    props.random.map((x, key) =>{
                        return  <Random
                            type={timelineOption}
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
                        />
                    })
                    :
                    timelineOption == "Quotes"?
                    props.quotes.map((x, key) =>{
                        return  <Quote
                            key={key}
                            quote={x.text}
                            author={x.author}
                        />
                    })
                    :
                    timelineOption == "Tweets"?
                    props.tweets.map((x, key) =>{
                        return  <Tweet
                            key={key}
                    
                            twText={x.fullText}
                            twMedia={x.mediaUrl}
                            twUser={x.user}
                            twUserPhoto={x.userPhoto}
                            twLink={x.link} 
                        />
                    })
                    :
                 
                    props.news.map((x, key) =>{
                        return  <New
                            key={key}
                    
                            type={timelineOption}
                            title={x.title}
                            description={x.description}
                            image={x.urlToImage}
                            url={x.url}
                        />
                    })
                }
                </div>



            </div>
        );
};
