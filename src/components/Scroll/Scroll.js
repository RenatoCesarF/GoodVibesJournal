import React, { Component, useState,useEffect } from 'react';
import Next from 'next';
import axios from "axios";
import ReactLoading from 'react-loading'

import Item from '../Item/Item';
import styles from './Scroll.module.css';

import MenuSystem from '../../utils/menuSystem';



export default function Scroll() {
    
    const [data, setData] = useState(null);
    
    useEffect(() => {
        axios.get('/api/goodNews')
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
    `}
            </style>
            {data ?
            (      
                data.map((index) =>
                
                    <Item
                        title={index.title}
                        description={index.description}
                        image={index.urlToImage}
                        url={index.url}
                    />
                )
            )
            :
            (
                <ReactLoading
                    type={"bubbles"}
                    color={"#C4C4C4"}
                    className={styles.loading}
                />
            )
        }
        
        </div>

    );
}


