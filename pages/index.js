import styles from"./styles/index.module.css"
import { FaAngleDoubleDown} from 'react-icons/fa';
import Link  from 'next/link';

function getDayFase() {
    var dayFase;
    var time = new Date().getHours();
    
    
    if (time < 12) {
        dayFase = "Morning";
    } else if (time >= 12 & time < 18) {
        dayFase = "Evening";
    } else {
        dayFase = "Night";
    }
    
    return dayFase;
}


function navToTimeLine() {
    //Animation
    setTimeout(() => {  window.location = "/timeLine"; }, 1000);
}

function Home({ Component, pageProps }) {    
    var dayFase = getDayFase();
    
    return (
        <div >

            <style jsx global >{`       
            HTML,BODY{
                    background: linear-gradient(180deg, #6D6875 1.9%, rgba(181, 131, 141, 0.862522) 67.42%, rgba(229, 152, 155, 0.656673) 88.67%, rgba(255, 180, 162, 0.353189) 100%), #E5989B;

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
                <h1 className={styles.title} >Good <br/>{dayFase}</h1>
            </div>
          
            <FaAngleDoubleDown className={styles.icon} onClick={ navToTimeLine}/>
       
           
         
        </div>  
    );
}

export default Home;