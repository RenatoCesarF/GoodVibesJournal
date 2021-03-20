import React, {useState} from 'react';
import 'react-dom';
import 'next';
import ListItems from '../../utils/enum';
import styles from './Menu.module.css'


export default function HeaderMenu(props)  {

    const [option, setOption] = useState(ListItems[0].name)
    

    //Set the timeLine as news to start selectedOption
    function choseOption(option) {
        console.log(option)

        let =
        setOption(option)
    
        // if(option === ListItems[0].name){
        // }
        // if(option === ListItems[1].name){
        // }
        // if(option === ListItems[2].name){
        // }
        // if(option === ListItems[3].name){
        // }
        
        props.changeTimeline(option)
    }

    return (
        <div className={styles.scroller}>
            <style>{`  
                
                ::-webkit-scrollbar{
                    position: relative;
                    height:0rem;
                    cursor: pointer;
                }
                
                /* Track */
                ::-webkit-scrollbar-track {
                }
                
                /* Handle */
                ::-webkit-scrollbar-thumb {
                    cursor: pointer;
                    border-radius: 5px;
                }
                
            `}
            </style>
            <ul className={styles.menu}>
                {
                    ListItems.map((item, key) =>{
                        return(
                            <li key={key} className={styles.menuOption}>
                                <h3
                                    className={option}
                                    onClick={()=> choseOption(item.name)}>{item.name}
                                </h3>
                            </li>
                        )
                    })
                }
    
            </ul>
        </div>

    )
}
