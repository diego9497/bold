import styles from './SalesSummary.module.css';

function SalesSummary({ name, date, value }) {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          {`Total de ventas de ${name}`}
        </h2>
      </header>
      <div className={styles.content}>
        <h3 className={styles.price}>
          $
          {value}
        </h3>
        <span className={styles.date}>{date}</span>
      </div>
    </article>
  );
}
export default SalesSummary;
