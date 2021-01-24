import React, {useState} from 'react';
import 'react-dom';
import 'next';
import Link  from 'next/link';


import styles from './Menu.module.css'

export default function HeaderMenu() {

    function changeTimeLineContentTo() {
        console.log("TIME LINE CHANGED");
    }
    return (
        <div>
            <ul className={styles.menu}>
        
                <li className={styles.menuOption}>
                    <h3 className={styles.link} onClick={changeTimeLineContentTo}>Twits</h3>
                </li>

                <li className={styles.menuOption} >
                    <h3 className={styles.link} onClick={changeTimeLineContentTo}>News</h3>
                </li >

                <li className={styles.menuOption}>
                    <h3 className={styles.link} onClick={changeTimeLineContentTo}>Quotes</h3>
                </li>
             
            </ul>
        </div>

    );
    
  }