import { render } from "react-dom";
import React,{ Component, useState } from 'react'

import dynamic from 'next/dynamic';
import Link from 'next/link';


import { getDayFase, getDayColor } from '../utils/dayMomentSystem';

import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import Scroll from '../components/Scroll/Scroll';



export default class timeLine extends Component {
    state = {
        option: "Random"
    }

    changeTimeline = (nextOption) => {
        this.setState({ option: nextOption })
    }

    render() {
        return (
            <div>
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
                `}
                    
                </style>
                <Header/>
                <Menu changeTimeline={this.changeTimeline}/>
                <Scroll option={this.state.option}/>
            </div>
        );
    }
}
