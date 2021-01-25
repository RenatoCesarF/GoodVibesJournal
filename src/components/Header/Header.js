import styles from './Header.module.css';
import { useRouter } from 'next/router'


function Header() {   
    const router = useRouter();

    return (
        <header className={styles.header}>
            <h1 onClick={()=>{router.back()}} className={styles.headerTitle}>Good Vibes</h1>
        </header>
    );
}

export default Header;