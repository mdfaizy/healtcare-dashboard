
import styles from './CalendarView.module.css';
import { FaPlus } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
const calendarData = {
  Mon: ['10:00', '11:00', '12:00'],
  Tue: ['08:00', '09:00', '10:00'],
  Wed: ['12:00', '--', '13:00'],
  Thu: ['10:00', '11:00', '--'],
  Fri: ['--', '14:00', '16:00'],
  Sat: ['12:00','14:00','15:00'],
  Sun: ['09:00','10:00','11:00']
};

const CalendarView = () => {
  return (
    <div className={styles.calendarSection}>
        <div className={styles['header-icons']}>
              <img src="https://i.pravatar.cc/40" alt="Profile" className={styles['profile-pic']} />
              <button className={styles['add-btn']}><FaPlus /></button>
            </div>
      <div className={styles.calendarHeader}>
        <h4>October 2021</h4>
        <div className={styles.calendarArrows}>
          <span><FaArrowLeft/></span>
          <span><FaArrowRight/></span>
        </div>
      </div>

      <div className={styles.calendarGrid}>
        {Object.entries(calendarData).map(([day, slots], index) => (
          <div key={index} className={styles.calendarDaySlot}>
            <div className={styles.calendarDay}>
              <span>{day}</span>
              <span className={styles.calendarDate}>{25 + index}</span>
            </div>
            <div className={styles.timeSlots}>
              {slots.map((time, i) => (
                <div
                  key={i}
                  className={`${styles.slot} ${['09:00', '11:00'].includes(time) ? styles.active : ''}`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

       <div className={styles.appointments}>
      <div className={`${styles.appointmentCard} ${styles.dentist}`}>
        <div className={styles.appointmentDetails}>
          <div className={styles.detailsdr}>
            <div className={styles.appointmentTitle}>Dentist</div>
            <div className={styles.appointmentTime}>09:00 - 11:00</div>
            <div className={styles.appointmentDoctor}>Dr. Cameron Williamson</div>
          </div>
          <div className={styles.appointmentIcon}>🦷</div>
        </div>
      </div>

      <div className={`${styles.appointmentCard} ${styles.physio}`}>
        <div className={styles.appointmentDetails}>
          <div className={styles.detailsdr}>
            <div className={styles.appointmentTitle}>Physiotherapy Appointment</div>
            <div className={styles.appointmentTime}>11:00 - 12:00</div>
            <div className={styles.appointmentDoctor}>Dr. Kevin Djones</div>
          </div>
          <div className={styles.appointmentPhysio}>💪</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CalendarView;
