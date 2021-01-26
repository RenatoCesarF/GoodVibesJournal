import React, { Component, useState,useEffect } from 'react';
import Next from 'next';

import styles from './Scroll.module.css';
import Item from '../Item/Item';

import newsController from '../../controllers/newsController';

const axios = require("axios");


export const setTimeLineTo = async (option) =>{
    switch (option) {
        case "News":
            var teste = await newsController.getAllgoodNews();
            console.log(teste);
            break;
        default:
            break;
    }
}

export default function Scroll() {
  
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:3000/api/goodNews')
            .then((res) => {
                setData(res.data);
                console.log(data);
            })
            .catch((error) =>{ console.log(error);});
    }, []);


    return (

        <div className={styles.scroller} >
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
            {data ? (

                <Item
                    title={data[0].title}
                    description={data[0].description}
                    image={data[0].urlToImage}
                />

            ) : (
                    
                <h3> Loading</h3>
            )}
           
        </div>

            
    );


}

