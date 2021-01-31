import React, {useState} from 'react';
import 'react-dom';
import 'next';

import styles from './Menu.module.css'
import { render } from 'react-dom';


export default function HeaderMenu(props)  {

    const [newsOption, setNewsOption] = useState(styles.selectedOption)
    const [tweetsOption, settweetsOption] = useState(styles.link)
    const [quotesOption, setQuotesOption] = useState(styles.link)

    //Set the timeLine as news to start
    function choseOption(option) {
        //Set all as unselected, then see witch one to set as selected
        setNewsOption(styles.link);
        setQuotesOption(styles.link);
        settweetsOption(styles.link);
    
        switch (option) {
            case "Tweets":
                settweetsOption(styles.selectedOption);
                props.changeTimeline("Tweets")
                break;
            case "News":
                setNewsOption(styles.selectedOption);
                props.changeTimeline("News")
            
                break;
            case "Quotes":
                setQuotesOption(styles.selectedOption);
                props.changeTimeline("Quotes")
                break;
        }
            
    }
    return (
        <div>
            <ul className={styles.menu}>

                <li className={styles.menuOption}>
                    <h3
                        className={tweetsOption}
                        onClick={()=> choseOption("Tweets")}>Tweets</h3>
                </li>
    
                <li className={styles.menuOption} >
                    <h3 className={newsOption}
                        onClick={() => choseOption("News")}>News</h3>
                </li >

                <li className={styles.menuOption}>
                    <h3 className={quotesOption}
                        onClick={() => choseOption("Quotes")}>Quotes</h3>
                </li>
            
            </ul>
        </div>

    );

}

  /*
                
  */