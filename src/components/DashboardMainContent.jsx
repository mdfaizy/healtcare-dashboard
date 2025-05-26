// import React from 'react';
// import AnatomySection from './DashboardMainContent/AnatomySection';
// import HealthStatusCards from './DashboardMainContent/HealthStatusCards';
// import CalendarView from './DashboardMainContent/CalendarView';
// import UpcomingSchedule from './DashboardMainContent/UpcomingSchedule';
// import ActivityFeed from './DashboardMainContent/ActiveFeed';
// import './DashboardMainContent.css';

// const DashboardMainContent = () => {
//   return (
//     <main className="dashboard-content">
//       <div className="left-panel">
//         <h2 className="dashboard-title">Dashboard</h2>
//        <div style={{display:'flex',width:'400px',gap:'20px'}}>
//          <AnatomySection />
//         <HealthStatusCards />
//        </div>
//         <ActivityFeed />
//       </div>
//       <div className="right-panel">
//         <CalendarView />
//         <UpcomingSchedule />
//       </div>
//     </main>
//   );
// };

// export default DashboardMainContent;




import React from 'react';
import AnatomySection from './DashboardMainContent/AnatomySection';
import HealthStatusCards from './DashboardMainContent/HealthStatusCards';
import CalendarView from './DashboardMainContent/CalendarView';
import UpcomingSchedule from './DashboardMainContent/UpcomingSchedule';
import ActivityFeed from './DashboardMainContent/ActiveFeed';
import styles from './DashboardMainContent.module.css';

const DashboardMainContent = () => {
  return (
    <main className={styles.dashboardContent}>
      <div className={styles.leftPanel}>
        <h2 className={styles.dashboardTitle}>Dashboard</h2>
        <div className={styles.anatomyHealthWrapper}>
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <ActivityFeed />
      </div>
      <div className={styles.rightPanel}>
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </main>
  );
};

export default DashboardMainContent;
