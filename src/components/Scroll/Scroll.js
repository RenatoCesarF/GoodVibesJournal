import React, { Component, useState,useEffect } from 'react';
import Next from 'next';
import axios from "axios";
import ReactLoading from 'react-loading'

import Item from '../Item/Item';
import styles from './Scroll.module.css';


export default class Scroll extends Component{
    state = {
        option: "News",
        data: null
    }

    changeToTimeLine = (newOption) => {
        console.log(`Changing to ${newOption}`)
        // re-renders the component
        this.setState({option: newOption});
    };

    render() {
        
       
        switch (this.state.option) {
            case "News":
                axios.get('/api/goodNews')
                .then((res) => {
                    this.setState({data: res.data})
                })
                .catch((error) =>{ console.log(error);});
                break;
        
            default:
                break;
        }


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
                {this.state.data ?
                (      
                    this.state.data.map((index) =>
                    
                        <Item
                            title={index.title}
                            description={index.description}
                            image={index.urlToImage}
                            url={index.url}
                            key={index.key}
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
}

export var scrollController = new Scroll();