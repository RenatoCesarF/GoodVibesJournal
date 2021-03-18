import { FaAngleDoubleDown} from 'react-icons/fa';
import { render } from "react-dom";
import React,{ useState } from 'react'
import Head from 'next/head'
import styles from"../styles/index.module.css"
import { getDayFase, getDayColor } from '../utils/dayMomentSystem';


function Home() {    
    const [titleState, setTitleState] = useState(styles.title);
    
    const navToTimeLine = () => {        
        setTitleState(styles.titleGoing);
        
        setTimeout(() => {
            window.location = "/timeLine";
        }, 700);
   }

    return (
        <div>
        <Head>
            <link rel="shortcut icon" href='../../static/icon_unfilled.ico'/>
            <title>Good Vibes Jornal</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        
            <style jsx global >{`       
            html,body{
                    
                ${getDayColor()}
                margin: 0;
                padding: 0;
                background-size:100%;
                
                width: 100%;
                height:100%;
                overflow: hidden;

                }
            `}
            </style>
                
            <div>
                <h1 className={titleState} >Good <br/>{getDayFase()}</h1>
            </div>
          
            <FaAngleDoubleDown className={styles.icon} onClick={ navToTimeLine} size="3rem"/>
         
        </div> 

    );
}

export default Home;