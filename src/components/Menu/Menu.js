import React, {useState} from 'react'
import 'react-dom'
import 'next'

import styles from './Menu.module.css'


export default function HeaderMenu(props)  {

    const [newsOption, setNewsOption] = useState(styles.link)
    const [tweetsOption, settweetsOption] = useState(styles.link)
    const [quotesOption, setQuotesOption] = useState(styles.link)
    const [randomOption, setRandomOption] = useState(styles.selectedOption)

    //Set the timeLine as news to start selectedOption
    function choseOption(option) {
        //Set all as unselected, then see witch one to set as selected
        setNewsOption(styles.link)
        setQuotesOption(styles.link)
        settweetsOption(styles.link)
        setRandomOption(styles.link)
    
        switch (option) {
            case "Tweets":
                settweetsOption(styles.selectedOption)
                props.changeTimeline("Tweets")
                break
            case "News":
                setNewsOption(styles.selectedOption)
                props.changeTimeline("News")
                break   
            
            case "Random":
                setRandomOption(styles.selectedOption)
                props.changeTimeline("Random")
                break
                
            case "Quotes":
                setQuotesOption(styles.selectedOption)
                props.changeTimeline("Quotes")
                break
        }
            
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

                <li className={styles.menuOption}>
                    <h3
                        className={tweetsOption}
                        onClick={()=> choseOption("Tweets")}>Tweets</h3>
                </li>
    
                <li className={styles.menuOption} >
                    <h3 className={newsOption}
                        onClick={() => choseOption("News")}>News</h3>
                </li >
                <li className={styles.menuOption} >
                    <h3 className={randomOption}
                        onClick={() => choseOption("Random")}>Random</h3>
                </li >

                <li className={styles.menuOption}>
                    <h3 className={quotesOption}
                        onClick={() => choseOption("Quotes")}>Quotes</h3>
                </li>
            
            </ul>
        </div>

    )
}
