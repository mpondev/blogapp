import MenuPosts from '../MenuPosts/MenuPosts';
import MenuCategories from '../MenuCategories/MenuCategories';

import styles from './Menu.module.scss';

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most popular</h1>
      <MenuPosts withImage={false} />

      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      <h2 className={styles.subtitle}>Chosen by the Editor</h2>
      <h1 className={styles.title}>{"Editor's pick"}</h1>
      <MenuPosts withImage={true} />
    </div>
  );
}

export default Menu;
