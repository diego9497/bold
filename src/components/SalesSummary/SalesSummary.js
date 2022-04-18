import { Info } from '../../Icons';
import { getFormattedCurrency } from '../../utils/index';
import styles from './SalesSummary.module.css';

function SalesSummary({ name, date, value }) {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          {`Total de ventas de ${name}`}
        </h2>
        <Info size={18} />
      </header>
      <div className={styles.content}>
        <h3 className={styles.price}>
          {getFormattedCurrency(value)}
        </h3>
        <span className={styles.date}>{date}</span>
      </div>
    </article>
  );
}
export default SalesSummary;
