// navigation.js
import { MdDashboard, MdOutlineSupportAgent } from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { FaCheckCircle, FaComments } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";

export const navLinks = [
  { label: "Dashboard", icon: MdDashboard },
  { label: "History", icon: AiOutlineHistory },
  { label: "Calendar", icon: MdOutlineDateRange},
  { label: "Appointments", icon:  CiSquarePlus },
  { label: "Statistics", icon: IoStatsChartSharp },
  { label: "Chat", icon: FaComments },
  { label: "Support", icon: IoIosCall },
];
