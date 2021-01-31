import { FaAngleDoubleDown} from 'react-icons/fa';
import { render } from "react-dom";
import React,{ useState } from 'react'

import styles from"../styles/index.module.css"
import { getDayFase, getDayColor } from '../utils/dayMomentSystem';


function Home() {    
    const [titleState, setTitleState] = useState(styles.title);

    var dayFase = getDayFase();
    
    const navToTimeLine = () => {        
        setTitleState(styles.titleGoing);
        
        setTimeout(() => {
            window.location = "/timeLine";
        }, 700);
   }

    return (
        <div >
 
            <style jsx global >{`       
            html,body{
                    
                    ${getDayColor(dayFase)}
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
                <h1 className={titleState} >Good <br/>{dayFase}</h1>
            </div>
          
            <FaAngleDoubleDown className={styles.icon} onClick={ navToTimeLine}/>
         
        </div>  
    );
}

export default Home;