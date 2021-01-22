import { getDayFase, getDayColor } from './index' 


function timeLine({ Component, pageProps }) {   
    
    var dayFase = getDayFase()

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

                    overflow: hidden;
                    
                }
            `}
              </style>
 
        </div>  
    );
}

export default timeLine;