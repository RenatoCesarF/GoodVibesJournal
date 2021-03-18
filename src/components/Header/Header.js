import styles from './Header.module.css';
import { CgInfo } from 'react-icons/cg';
import { FaPeace,FaHeart, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import React, { useState } from 'react';
import logo from '../../../assets/logo.png'

export default function Header() {
    const [infosStyle, setInfosStyle] = useState(styles.closedInfos)

    function showInfo() {
        if (infosStyle == styles.closedInfos) {
            setInfosStyle(styles.openedInfos)
        } else {   
            setInfosStyle(styles.closedInfos)
        }
    } 
  
    return(
        <header className={styles.header}>
            <CgInfo
            size="5%"
                className={styles.infoIcon}
                onClick={showInfo}
            />
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
                    
                    <div  className={styles.myEmailDiv} >
                        {'Any sugestion or feedback send it to: '}
                        <br />

                        <MdEmail className={styles.emailSymble } href="mailto:re.fbarcellos@hotmail.com"/>
                        <a className={styles.emailText} href="mailto:re.fbarcellos@hotmail.com" >
                            re.fbarcellos@hotmail.com
                        </a>
                    </div>

                    <FaGithub
                        className={styles.gitSymble}
                        onClick={() => {window.open("https://github.com/RenatoCesarF/GoodVibesJornal") }}
                    />
                </h3>
            </div>
        </header>
        )
}