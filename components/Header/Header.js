import styles from './Header.module.css';

function Header() {   
    return (
        <header className={styles.header}>
            <a className={styles.headerTitle}>Good Vibes</a>
        </header>
    );
}

export default Header;