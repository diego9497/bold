import { Help } from '../../Icons';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>Bold</h1>
        <nav>
          <ul className={styles.navigationList}>
            <li className={styles.navigationLink}>Mi negocio</li>
            <li className={styles.navigationLink}>
              Ayuda
              {' '}
              <Help size={16} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
