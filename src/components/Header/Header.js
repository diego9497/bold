import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>Bold</h1>
        <nav>
          <ul className={styles.navigationList}>
            <li className={styles.navigationLink}>Mi negocio</li>
            <li className={styles.navigationLink}>Ayuda</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
