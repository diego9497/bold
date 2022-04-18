import { useEffect, useRef, useState } from 'react';

import styles from './SalesTabs.module.css';

import { Close, Filter } from '../../Icons';
import { TAB_NAMES } from '../../constants';

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

function SalesTabs({
  currentTab, onTabClick,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [closeAnimation, setCloseAnimation] = useState(false);
  const popUpRef = useRef(null);

  const openPopUp = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const closeModal = () => {
    const modalElement = popUpRef.current;

    if (modalElement) {
      setCloseAnimation(true);

      const handleAnimationEnd = (e) => {
        if (e.animationName === styles.leave) {
          onClose();
          setCloseAnimation(false);
          modalElement.removeEventListener('animationend', handleAnimationEnd);
        }
      };

      modalElement.addEventListener('animationend', handleAnimationEnd);
    }
  };

  const handleModalBlur = (e) => {
    if (popUpRef.current !== e.target && !popUpRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      if (popUpRef.current) document.addEventListener('mousedown', handleModalBlur);
    } else if (popUpRef.current) document.removeEventListener('mousedown', handleModalBlur);
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <nav className={styles.tabs}>
        <Tab name={TAB_NAMES.TODAY} currentTab={currentTab} onClick={onTabClick}>Hoy</Tab>
        <Tab name={TAB_NAMES.WEEK} currentTab={currentTab} onClick={onTabClick}>Esta semana</Tab>
        <Tab name={TAB_NAMES.MONTH} currentTab={currentTab} onClick={onTabClick}>Septiembre</Tab>
      </nav>
      <div className={styles.filterContainer}>
        <button type="button" className={styles.filterButton} onClick={openPopUp}>
          Filtrar
          {' '}
          <Filter />
        </button>
        {isOpen && (
          <div className={`${styles.popUp} ${closeAnimation ? styles.close : ''}`} ref={popUpRef}>
            <h4 className={styles.popUpTitle}>Filtrar</h4>
            <Close className={styles.popUpCloseButton} onClick={closeModal} size={14} />
            <form>
              <label htmlFor="datafono" className={styles.checkbox}>
                <input type="checkbox" name="type" id="datafono" />
                Cobro con datáfono
              </label>
              <label htmlFor="link" className={styles.checkbox}>
                <input type="checkbox" name="type" id="link" />
                Cobro con link de pago
              </label>
              <label htmlFor="all" className={styles.checkbox}>
                <input type="checkbox" name="type" id="all" />
                Ver todos
              </label>
              <button type="button" className={styles.popUpButton} onClick={closeModal}>Aplicar</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
export default SalesTabs;
