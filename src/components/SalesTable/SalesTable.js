import styles from './SalesTable.module.css';
import SalesRow from './SalesRow';

function SalesTable({ sales }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Tus ventas de septiembre</h2>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableHeadRow}>
            <th className={styles.tableHeadCell}>Transacción</th>
            <th className={styles.tableHeadCell}>Fecha y hora</th>
            <th className={styles.tableHeadCell}>Método de pago</th>
            <th className={styles.tableHeadCell}>ID transacción Bold</th>
            <th className={styles.tableHeadCell}>Monto</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {sales.map((sale, index) => (
            <SalesRow
              key={sale.transactionId}
              sale={sale}
              isOdd={index % 2 === 0}
              isLast={index === sales.length - 1}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
export default SalesTable;
