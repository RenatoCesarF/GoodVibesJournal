import React from 'react';
import 'react-dom';
import 'next';

import styles from './HeaderMenu.module.css'

function HeaderMenu() {
    
    return (
        <div>
            <ul>
        
                <li>
                    <Link href='/scroll' shallow={true} >Sobre</Link>
                </li>
                <li>
                    <Link href='/scroll' shallow={true} >Projetos</Link>
                </li>
                <li>
                    <Link href='/scroll' shallow={true} >Posts</Link>
                </li>
            </ul>
        </div>

    );
    
  }