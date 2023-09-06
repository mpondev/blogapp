import Pagination from '../Pagination/Pagination';
import styles from './CardList.module.scss';

function CardList() {
  return (
    <div className={styles.container}>
      CardList
      <Pagination />
    </div>
  );
}

export default CardList;
