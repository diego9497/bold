import { useState } from 'react';

import styles from './Home.module.css';
import SalesSummary from '../../components/SalesSummary/SalesSummary';
import SalesTabs from '../../components/SalesTabs/SalesTabs';
import SalesTable from '../../components/SalesTable/SalesTable';
import { TAB_NAMES } from '../../constants';

import month from '../../data/month.json';
import week from '../../data/week.json';
import day from '../../data/day.json';

function Home() {
  const [activeTab, setActiveTab] = useState(TAB_NAMES.TODAY);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const data = {
    [TAB_NAMES.TODAY]: day,
    [TAB_NAMES.WEEK]: week,
    [TAB_NAMES.MONTH]: month,
  };

  const currentTab = data[activeTab];

  return (
    <>
      <section className={styles.summaryTabs}>
        <SalesSummary
          date={currentTab.periodDescription}
          name={currentTab.periodShortName}
          value={currentTab.totalSales}
        />
        <SalesTabs currentTab={activeTab} onTabClick={handleTabClick} />
      </section>
      <SalesTable sales={currentTab.periodSales} />
    </>
  );
}
export default Home;
