import styles from './Header.module.css';
function Header() {   
    return (
        <header className={styles.header}>
            <h1 unselectable="on" className={styles.headerTitle}>Good Vibes</h1>
        </header>
    );
}

export default Header;