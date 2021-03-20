import axios from "axios";
import Quote from '../components/Item/Quote/Quote';
import Header from'../components/Header/Header';
import React from 'react';
import Head from 'next/head'
import { getDayFase, getDayColor } from '../utils/dayMomentSystem';


export async function getServerSideProps(context){
    let tweets;
    let news;
    let quotes;
    
    await axios.get(`http://localhost:3000/api/quotes`)
    .then((res) => {
        quotes = res.data.data;
    })
    .catch((error) => { console.log(error); });

    return{
        props:{
            quotes:quotes,
            
        }
    }
}

export default function Jornal(props){
    return (

    <div>
                <Head>
                    <link rel="shortcut icon" href='../../static/icon_unfilled.ico'/>
                    <title>Good Vibes Jornal</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
 
                <style jsx global >{`       
                html,body{
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

                        ${getDayColor()}
                        margin: 0;
                        padding: 0;
                        background-size:100%;
                        
                        width: 100vw;
                        height:100vh;
                        
                        overflow: hidden;
                    }
                `}</style>
        <Header/>
         {
            props.quotes.map((x, key) =>{
             return <Quote key={key} quote={x.text} author={x.author}/> 
            })
        }



    </div>
        );
};
