import styles from './Header.module.css';
import { CgInfo } from 'react-icons/cg';
import { FaPeace,FaHeart, FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {CgArrowUpO} from 'react-icons/cg'

import React, { useState } from 'react';
import logo from '../../../assets/logo.png'
import scrollToTop from '../../utils/scrollToTop';

export default function Header() {
    const [infosStyle, setInfosStyle] = useState(styles.closedInfos)
    
    function showInfo() {
        if (infosStyle != styles.closedInfos) {
            setInfosStyle(styles.closedInfos)
            return;   
        }

        setInfosStyle(styles.openedInfos)
    } 
   
    return(
        <header className={styles.header}>
         
            
            <CgInfo
                className={styles.infoIcon}
                onClick={showInfo}
            />

            <CgArrowUpO onClick={scrollToTop}className={styles.scroll_icon}/>

            <img
                src={logo}
                className={styles.logo}
            />
   

            <div className={infosStyle}>
                <h3 className={styles.informationDescription}>
                    {`Made with`}
                    <FaPeace className={styles.peaceSymble} />
                    {"and"}
                    <FaHeart className={styles.hearthSymble}/>
                    {'by Renato Cesar'}
                    <br />
                    
                    <div  className={styles.contactDiv} >
                        {'Sugestion or feedback send it to: '}
                        <br />

                        <MdEmail className={styles.emailSymbol } href="mailto:re.fbarcellos@hotmail.com"/>
                        <a className={styles.emailText} href="mailto:re.fbarcellos@hotmail.com" >
                            re.fbarcellos@hotmail.com
                        </a>

                        <br/>

                        <FaTwitter className={styles.twitterSymbol } href="http://twitter.com/nerat0"/>
                        <a className={styles.twitterText} href="http://twitter.com/nerat0">
                            @nerat0
                        </a>
                    </div>


                    <FaGithub
                        className={styles.gitSymble}
                        onClick={() => {window.open("https://github.com/RenatoCesarF/GoodVibesJournal") }}
                    />
                </h3>
            </div>
        </header>
        )
}