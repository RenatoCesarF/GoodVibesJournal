import React,{ Component } from 'react'
import Head from 'next/head'

import { getDayColor,getHeaderDayColor } from '../utils/dayMomentSystem';
import ListItens from '../utils/menuItems'

import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import Scroll from '../components/Scroll/Scroll';

export default class timeLine extends Component {
    state = {
        option: ListItens[2],
    }

    listenMenu = (selectedOption) => {
        this.setState({ option: selectedOption })
    }
   
    render() {
        return (
            <div>
                
                <Head>
                    <link rel="shortcut icon" href='../../static/icon_unfilled.ico'/>
                    <title>Good Vibes Journal</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <meta name="theme-color" content={getHeaderDayColor()} />
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
                       
                    ::-webkit-scrollbar{
                        position: relative;
                        background: rgba(0, 0, 0, .1);
                        ${getDayColor()}
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
                        background: #52525280;;
                        border-radius: 5px;
                    }
                    
                `}
                </style>

                    
                <Header/>
                <Menu listenMenu={this.listenMenu}/>
                <Scroll timelineOption={this.state.option}/>
            </div>
        );
    }
}
