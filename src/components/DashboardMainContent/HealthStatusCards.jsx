import React from 'react';
import { healthIndicators } from '../../data/healthData';
import styles from './HealthStatusCards.module.css';

const HealthStatusCards = () => {
  return (
    <div className={styles.healthStatusCards}>
      {healthIndicators.map((item, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.statusHeader}>
            <div className={`${styles.iconBox} ${styles[item.color]}`}>
              <img src={item.icon} alt={item.organ} style={{ width: '40px', height: '30px' }} />
            </div>
            <h4 className={styles.organName}>{item.organ}</h4>
          </div>
          <p className={styles.statusDate}>Date: {item.date}</p>
          <div className={styles.statusBar}>
            <div
              className={`${styles.fill} ${styles[item.color]}`}
              style={{ width: item.percentage }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
