import React, { Component, useState,useEffect } from 'react';
import Next from 'next';
import axios from "axios";
import ReactLoading from 'react-loading'

import Item from '../Item/Item';
import styles from './Scroll.module.css';


export default class Scroll extends Component{
    constructor(props) {
        super(props);
        this.state = {
            timeline: null,
        };
    }

    requestAPI(route) {
        axios.get(`/api/${route}`)
        .then((res) => {
            this.setState({ timeline: res.data })
        })
        .catch((error) => { console.log(error); });
    }
        
    render() {
        switch (this.props.option) {
            case "Random":
                this.requestAPI('random')
                break;
            case "News":
                this.requestAPI('goodNews')
                break;
                
            case "Quotes":
                this.requestAPI('quotes')
                break;

            case "Tweets":
                this.requestAPI('twitter/allTweets')
                break;
        }
        return (

            <div className={styles.scroller} >
                <style >{`  
                
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
                { this.state.timeline && this.props.isReady
                    ?
                        this.state.timeline.data.map((index) =>
                            <Item
                                type={this.state.timeline.type}
                                title={index.title}
                                description={index.description}
                                image={index.urlToImage}
                                url={index.url}
                                key={index.key}

                                quote={index.text}
                                author={index.author}

                                twText={index.fullText}
                                twMedia={index.mediaUrl}
                                twUser={index.user}
                                twUserPhoto={index.userPhoto}
                                twLink={index.link} 
                            />
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