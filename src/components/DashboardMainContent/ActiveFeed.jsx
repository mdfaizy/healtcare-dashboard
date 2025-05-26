// import "./ActivityFeed.css";

// const activityData = [
//   // Mon
//   [
//     { color: "gray", height: 80 },
//     { color: "cyan", height: 50, marginTop: "20px" },

//     { color: "gray", height: 20, marginTop: "35px" },
//     { color: "gray", height: 20 },
//     { color: "gray", height: 40, marginTop: "55px" },
//   ],
//   // Tue
//   [
//     { color: "cyan", height: 40 },
//     { color: "purple", height: 40 },
//     { color: "purple", height: 50, marginTop: "20px" },
//     { color: "gray", height: 20, marginTop: "35px" },
//     { color: "gray", height: 20 },
//     { color: "cyan", height: 30, marginTop: "65px" },
//   ],
//   // Wed
//   [
//     { color: "gray", height: 90 },
//     { color: "gray", height: 50, marginTop: "35px" },

//     { color: "cyan", height: 20, marginTop: "45px" },
//     { color: "purple", height: 20 },
//     { color: "purple", height: 30, marginTop: "75px" },
//   ],
//   // Thu
//   [
//     { color: "gray", height: 40 },
//     { color: "gray", height: 40 },
//     { color: "cyan", height: 50, marginTop: "20px" },
//     { color: "cyan", height: 20, marginTop: "35px" },
//     { color: "purple", height: 20 },
//     { color: "gray", height: 30, marginTop: "65px" },
//   ],
//   // Fri
//   [
//     { color: "cyan", height: 40 },
//     { color: "purple", height: 40 },
//     { color: "purple", height: 50, marginTop: "20px" },
//     { color: "gray", height: 20, marginTop: "35px" },
//     { color: "gray", height: 20 },
//     { color: "purple", height: 30, marginTop: "65px" },
//   ],
//   // Sat
//   [
//     { color: "gray", height: 90 },
//     { color: "gray", height: 50, marginTop: "20px" },

//     { color: "cyan", height: 20, marginTop: "35px" },
//     { color: "purple", height: 20 },
//     { color: "purple", height: 40, marginTop: "55px" },
//   ],
//   // Sun
//   [
//     { color: "gray", height: 40 },
//     { color: "gray", height: 40 },
//     { color: "cyan", height: 50, marginTop: "20px" },
//     { color: "gray", height: 20, marginTop: "35px" },
//     { color: "gray", height: 20 },
//     { color: "purple", height: 30, marginTop: "65px" },
//   ],
// ];

// const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// const ActivityChart = () => {
//   return (
//     <div className="activity-chart">
//       <div className="activity-header">
//         <span className="title">Activity</span>
//         <span className="note">3 appointment on this week</span>
//       </div>

//       <div className="activity-bars">
//         {activityData.map((bars, i) => (
//           <div>
//             <div className="day-column" key={i}>
//               {bars.map((bar, j) => (
//                 <div
//                   className={`bar ${bar.color}`}
//                   key={j}
//                   style={{
//                     height: `${bar.height}px`,
//                     marginTop: bar.marginTop || "2px",
//                   }}
//                 ></div>
//               ))}
//             </div>
//             <div className="day-label">{dayNames[i]}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ActivityChart;





import React from "react";
import styles from "./ActivityFeed.module.css"; 

const activityData = [
  // Mon
  [
    { color: "gray", height: 90 },
    { color: "cyan", height: 50, marginTop: "20px" },
    { color: "gray", height: 20, marginTop: "35px" },
    { color: "gray", height: 20 },
    { color: "gray", height: 40, marginTop: "55px" },
  ],
  // Tue
  [
    { color: "cyan", height: 40 },
    { color: "purple", height: 40 },
    { color: "purple", height: 50, marginTop: "20px" },
    { color: "gray", height: 20, marginTop: "35px" },
    { color: "gray", height: 20 },
    { color: "cyan", height: 30, marginTop: "65px" },
  ],
  // Wed
  [
    { color: "gray", height: 90 },
    { color: "gray", height: 50, marginTop: "35px" },
    { color: "cyan", height: 20, marginTop: "45px" },
    { color: "purple", height: 20 },
    { color: "purple", height: 30, marginTop: "75px" },
  ],
  // Thu
  [
    { color: "gray", height: 40 },
    { color: "gray", height: 40 },
    { color: "cyan", height: 50, marginTop: "20px" },
    { color: "cyan", height: 20, marginTop: "35px" },
    { color: "purple", height: 20 },
    { color: "gray", height: 30, marginTop: "65px" },
  ],
  // Fri
  [
    { color: "cyan", height: 40 },
    { color: "purple", height: 40 },
    { color: "purple", height: 50, marginTop: "20px" },
    { color: "gray", height: 20, marginTop: "35px" },
    { color: "gray", height: 20 },
    { color: "purple", height: 30, marginTop: "65px" },
  ],
  // Sat
  [
    { color: "gray", height: 90 },
    { color: "gray", height: 50, marginTop: "20px" },
    { color: "cyan", height: 20, marginTop: "35px" },
    { color: "purple", height: 20 },
    { color: "purple", height: 40, marginTop: "55px" },
  ],
  // Sun
  [
    { color: "gray", height: 40 },
    { color: "gray", height: 40 },
    { color: "cyan", height: 50, marginTop: "20px" },
    { color: "gray", height: 20, marginTop: "35px" },
    { color: "gray", height: 20 },
    { color: "purple", height: 30, marginTop: "65px" },
  ],
];

const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const ActivityChart = () => {
  return (
    <div className={styles["activity-chart"]}>
      <div className={styles["activity-header"]}>
        <span className={styles.title}>Activity</span>
        <span className={styles.note}>3 appointment on this week</span>
      </div>

      <div className={styles["activity-bars"]}>
        {activityData.map((bars, i) => (
          <div key={i} className={styles["day-wrapper"]}>
            <div className={styles["day-column"]}>
              {bars.map((bar, j) => (
                <div
                  key={j}
                  className={`${styles.bar} ${styles[bar.color]}`}
                  style={{
                    height: `${bar.height}px`,
                    marginTop: bar.marginTop || "2px",
                  }}
                ></div>
              ))}
            </div>
            <div className={styles["day-label"]}>{dayNames[i]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
