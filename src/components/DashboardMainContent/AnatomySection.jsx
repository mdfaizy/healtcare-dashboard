// import React from 'react';
// import './AnatomySection.css';

// const AnatomySection = () => {
//   return (
//     <section className="anatomy-section">
//       <div className="anatomy-card">
//         <img
//           src="https://t4.ftcdn.net/jpg/10/33/42/51/360_F_1033425116_Cs3Crteywk07V0OHEVKjEiia7aMg3jE9.jpg"
//           alt="Anatomy"
//           className="anatomy-img"
//         />

//         <div className="overlay-tag heart">💙 Healthy Heart</div>
//         <div className="overlay-tag leg">🦵 Healthy Leg</div>
//       </div>
//     </section>
//   );
// };

// export default AnatomySection;



import React from 'react';
import styles from './AnatomySection.module.css'; 

const AnatomySection = () => {
  return (
    <section className={styles['anatomy-section']}>
      <div className={styles['anatomy-card']}>
        <img
          src="https://t4.ftcdn.net/jpg/10/33/42/51/360_F_1033425116_Cs3Crteywk07V0OHEVKjEiia7aMg3jE9.jpg"
          alt="Anatomy"
          className={styles['anatomy-img']}
        />

        <div className={`${styles['overlay-tag']} ${styles.heart}`}>💙 Healthy Heart</div>
        <div className={`${styles['overlay-tag']} ${styles.leg}`}>🦵 Healthy Leg</div>
      </div>
    </section>
  );
};

export default AnatomySection;
