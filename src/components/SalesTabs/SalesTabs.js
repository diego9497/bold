import styles from './SalesTabs.module.css';
// eslint-disable-next-line
import { TAB_NAMES } from '../../pages/Home/Home';

function Tab({
  children, onClick, name, currentTab,
}) {
  const isActive = name === currentTab;
  return (
    <button
      type="button"
      onClick={() => onClick(name)}
      className={`${styles.tab} ${isActive ? styles.activeTab : ''}`}
    >
      {children}
    </button>
  );
}

function SalesTabs({ currentTab, onTabClick }) {
  return (
    <div className={styles.container}>
      <nav className={styles.tabs}>
        <Tab name={TAB_NAMES.TODAY} currentTab={currentTab} onClick={onTabClick}>Hoy</Tab>
        <Tab name={TAB_NAMES.WEEK} currentTab={currentTab} onClick={onTabClick}>Esta semana</Tab>
        <Tab name={TAB_NAMES.MONTH} currentTab={currentTab} onClick={onTabClick}>Septiembre</Tab>
      </nav>
      <div className={styles.filterContainer}>
        <button type="button" className={styles.filterButton}>Filtrar</button>
      </div>
    </div>
  );
}
export default SalesTabs;
