import { useState } from 'react';
import styles from './SalesRow.module.css';

import { TRANSACTION_TYPE_IDS } from '../../constants';
import { getFormattedCurrency, getFormattedDate } from '../../utils';

import { LinkIcon, Dataphone } from '../../Icons/index';

const renderTransactionIcon = (transactionType) => {
  switch (transactionType) {
    case TRANSACTION_TYPE_IDS.DATAPHONE:
      return <Dataphone size={14} />;
    case TRANSACTION_TYPE_IDS.LINK:
      return <LinkIcon size={14} />;
    default:
      return null;
  }
};

function SalesRow({ sale, isOdd, isLast }) {
  return (
    <>
      <Desktop sale={sale} isOdd={isOdd} isLast={isLast} />
      <Mobile sale={sale} isOdd={isOdd} isLast={isLast} />
    </>
  );
}

function Desktop({ sale, isOdd, isLast }) {
  const {
    transactionId,
    transactionType,
    transactionStatus,
    date,
    paymentMethod,
    amount,
    deduction,
  } = sale;
  return (
    <tr className={`${styles.desktopRow} ${isOdd && styles.odd} ${isLast && styles.last}`}>
      <td className={styles.transaction}>
        {renderTransactionIcon(transactionType)}
        {transactionStatus}
      </td>
      <td>{getFormattedDate(date)}</td>
      <td>
        <img src={`/images/franchise/${paymentMethod.name}.svg`} alt="" style={{ width: 30 }} />
        {paymentMethod.label}
      </td>
      <td>{transactionId}</td>
      <td>
        <p className={styles.amount}>{getFormattedCurrency(amount)}</p>
        {deduction && (
        <>
          <p className={styles.deductionLabel}>Deducción</p>
          <p className={styles.deduction}>
            {getFormattedCurrency(deduction * -1)}
          </p>
        </>
        )}
      </td>
    </tr>
  );
}

function Mobile({ sale, isOdd, isLast }) {
  const {
    transactionId,
    transactionType,
    transactionStatus,
    date,
    paymentMethod,
    amount,
    deduction,
  } = sale;
  const [isOpen, setIsOpen] = useState(false);
  return (

    <article className={`${styles.mobileRow} ${isOdd && styles.odd} ${isLast && styles.last}`}>
      <div className={styles.transaction}>
        <div>
          {renderTransactionIcon(transactionType)}
          {transactionStatus}
        </div>
        <button type="button" className={styles.expandButton} onClick={() => setIsOpen(!isOpen)}>{isOpen ? '-' : '+' }</button>
      </div>
      {isOpen && (
        <>
          <div className={styles.cellDetail}>
            <span>Fecha:</span>
            {getFormattedDate(date)}
          </div>
          <div className={styles.cellDetail}>
            <span>Payment method:</span>
            <span>
              <img src={`/images/franchise/${paymentMethod.name}.svg`} alt="" style={{ width: 30 }} />
              {paymentMethod.label}
            </span>
          </div>
          <div className={styles.cellDetail}>
            <span>ID transacción Bold:</span>
            {transactionId}
          </div>
          <div className={styles.cellDetail}>
            <span>Monto:</span>
            <div>
              <p className={styles.amount}>{getFormattedCurrency(amount)}</p>
              {deduction && (
              <>
                <p className={styles.deductionLabel}>Deducción</p>
                <p className={styles.deduction}>
                  {getFormattedCurrency(deduction * -1)}
                </p>
              </>
              )}
            </div>
          </div>
        </>
      )}
    </article>
  );
}
export default SalesRow;
