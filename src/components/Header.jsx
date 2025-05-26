
import styles from './Header.module.css'; 

import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['search-wrapper']}>
        <div className={styles['search-container']}>
          <CiSearch className={styles['search-icon']} />
          <input type="text" placeholder="Search" className={styles['search-input']} />
        </div>
        <FaBell className={styles['bell-icon']} />
      </div>
    </header>
  );
};

export default Header;
