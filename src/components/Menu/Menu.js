import React, {useState} from 'react';
import 'react-dom';
import 'next';
import Link  from 'next/link';

import {setTimeLineTo} from '../Scroll/Scroll'

import styles from './Menu.module.css'


export default function HeaderMenu() {

    const [newsOption, setNewsOption] = useState(styles.selectedOption)
    const [twitsOption, setTwitsOption] = useState(styles.link)
    const [quotesOption, setQuotesOption] = useState(styles.link)

    //Set the timeLine as news to start
    function choseOption(option) {
        //Set all as unselected, then see witch one to set as selected
        setNewsOption(styles.link);
        setQuotesOption(styles.link);
        setTwitsOption(styles.link);
        
        switch (option) {
            case "Twits":
                setTwitsOption(styles.selectedOption);
                //setTimeLineTo("Twits");
                break;
            case "News":
                setNewsOption(styles.selectedOption);
                setTimeLineTo("News");
                break;
            case "Quotes": 
                setQuotesOption(styles.selectedOption);
                //setTimeLineTo("Quotes");
                break;

        }
    }
    return (
        <div>
            <ul className={styles.menu}>
        
                <li className={styles.menuOption}>
                    <h3
                        className={twitsOption}
                        onClick={()=> choseOption("Twits")}>Twits</h3>
                </li>

                <li className={styles.menuOption} >
                    <h3 className={newsOption}
                        onClick={()=> choseOption("News")}>News</h3>
                </li >

                <li className={styles.menuOption}>
                    <h3 className={quotesOption}
                        onClick={()=> choseOption("Quotes")}>Quotes</h3>
                </li>
             
            </ul>
        </div>

    );
    
  }