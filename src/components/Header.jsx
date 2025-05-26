
import styles from './Header.module.css'; 
import { FaPlus } from "react-icons/fa";
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

      <div className={styles['header-icons']}>
                    <img src="https://i.pravatar.cc/40" alt="Profile" className={styles['profile-pic']} />
                    <button className={styles['add-btn']}><FaPlus /></button>
                  </div>
    </header>
  );
};

export default Header;
