import { render } from "react-dom";
import React,{ useState } from 'react'

import dynamic from 'next/dynamic';
import Link from 'next/link';


import { getDayFase, getDayColor } from '../utils/dayMomentSystem';
import styles from '../styles/timeLine.module.css';

import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import Scroll from '../components/Scroll/Scroll';



function timeLine() {   
    
    var dayFase = getDayFase();
  

    return (
        <div>
        
    
            <style jsx global >{`       
                HTML,BODY{
                        ${getDayColor(dayFase)}
                        margin: 0;
                        padding: 0;
                        background-size:100%;
                        
                        width: 100%;
                        height:100%;
                        
                    }
                `}
                </style>
            <Header/>
            <Menu />
            <Scroll/>
        </div>  
    );
}

export default timeLine;