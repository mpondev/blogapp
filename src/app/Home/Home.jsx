import Featured from '../../components/Featured/Featured';
import CategoryList from '../../components/CategoryList/CategoryList';
import CardList from '../../components/CardList/CardList';
import Menu from '../../components/Menu/Menu';
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}

export default Home;
