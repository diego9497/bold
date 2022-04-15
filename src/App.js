import styles from './App.module.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className={styles.app}>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
