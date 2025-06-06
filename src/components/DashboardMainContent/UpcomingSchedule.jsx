

import { upcomingAppointments } from'../../data/appointments'; 
import styles from './UpcomingSchedule.module.css';

const UpcomingSchedule = () => { 
  return (
    <div className={styles.upcomingSchedule}>
      <h4>The Upcoming Schedule</h4>
      {upcomingAppointments.map((dayGroup, idx) => (
        <div key={idx} className={styles.scheduleDay}>
          <h5>On {dayGroup.day}</h5>
          <div className={styles.appointmentsRow}>
            {dayGroup.appointments.map((item, i) => (
              <div key={i} className={styles.simpleCard}>
                <div className={styles.upcomingTitleTime}>
                  <span className={styles.apptTitle}>{item.title}</span>
                  <span className={styles.apptTime}>{item.time}</span>
                </div>
                <span>{item.icon}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
