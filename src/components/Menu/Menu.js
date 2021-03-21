import React, {useState} from 'react';
import 'react-dom';
import 'next';
import ListItems from '../../utils/enum';
import styles from './Menu.module.css'


export default function HeaderMenu(props)  {

    //Set the timeLine as news to start selectedOption
    function choseOption(option) {
        ListItems.map((items) => {return items.control = false})
        ListItems.filter((items) => { return items.name === option.name ?  items : null })[0].control = true
        props.changeTimeline(option.name)
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
                                    className={item.control ? styles.selectedOption : styles.link }
                                    onClick={()=> choseOption(item)}>{item.name}
                                </h3>
                            </li>
                        )
                    })
                }
            </ul>
        </div>

    )
}
