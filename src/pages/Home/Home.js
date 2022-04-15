import { useState } from 'react';

import styles from './Home.module.css';
import SalesSummary from '../../components/SalesSummary/SalesSummary';
// eslint-disable-next-line
import SalesTabs from '../../components/SalesTabs/SalesTabs';
import SalesTable from '../../components/SalesTable/SalesTable';

export const TAB_NAMES = {
  TODAY: 'Hoy',
  WEEK: 'Esta semana',
  MONTH: 'Mes',
};

function Home() {
  const [activeTab, setActiveTab] = useState(TAB_NAMES.TODAY);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <section className={styles.summaryTabs}>
        <SalesSummary date="Septiembre, 2020" name="septiembre" value="1'560.000" />
        <SalesTabs currentTab={activeTab} onTabClick={handleTabClick} />
      </section>
      <SalesTable />
    </>
  );
}
export default Home;
