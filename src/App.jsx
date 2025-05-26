import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardMainContent from "./components/DashboardMainContent";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;
