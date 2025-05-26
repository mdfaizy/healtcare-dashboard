import React, { useState, useEffect } from 'react';
import { IoMdSettings } from 'react-icons/io';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../data/navigation';
import styles from './Sidebar.module.css'; 

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={styles.app}>
      {/* {isMobile && !isOpen && (
        <button className={styles['sidebar-toggle']} onClick={toggleSidebar} aria-label="Open sidebar">
          <FaBars />
        </button>
      )} */}

      <div className={`${styles.sidebar} ${isMobile ? (isOpen ? styles.open : styles.collapsed) : styles.open}`}>
        <div className={styles['sidebar-header']}>
          {isOpen && (
            <div>
              Health<span className={styles.logocare}>care.</span>
            </div>
          )}
          {isMobile && (
            <button className={styles['sidebar-toggle']} onClick={toggleSidebar} aria-label="Toggle sidebar">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
        </div>

        <ul className={styles['sidebar-menu']}>
          <li className={styles['menu-section']}>
            <h4>General</h4>
            {navLinks.slice(0, 4).map((link, idx) => {
              const Icon = link.icon;
              return (
                <li key={idx} className={`${styles['menu-item']} ${idx === 0 ? styles.active : ''}`}>
                  <a href="#">
                    <Icon className={styles.icon} />
                    {isOpen && <span className={styles.label}>{link.label}</span>}
                  </a>
                </li>
              );
            })}
          </li>

          <li className={styles['menu-section']}>
            <h4>Tools</h4>
            {navLinks.slice(5).map((link, idx) => {
              const Icon = link.icon;
              return (
                <li key={idx} className={styles['menu-item']}>
                  <a href="#">
                    <Icon className={styles.icon} />
                    {isOpen && <span className={styles.label}>{link.label}</span>}
                  </a>
                </li>
              );
            })}
          </li>
        </ul>

        <div className={styles['profile-section']}>
          <div className={styles['settings-link']}>
            <IoMdSettings className={styles.icon} />
            {isOpen && <span className={styles.label}>Settings</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
