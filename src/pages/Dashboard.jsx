import MusicPlayer from "../components/MusicPlayer";
import ReminderComponent from "../components/ReminderComponent";
import SideBarComponent from "../components/SideBarComponent";
import TodoComponent from "../components/TodoComponent";
import "../styles/pages/css/Dashboard.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import DashboardComponent from "../components/DashboardComponent";

const DashboardPage = () => {
  return (
    <Router>
      <SideBarComponent />
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" exact element={<DashboardComponent />} />
          <Route path="/todo" exact element={<TodoComponent />} />
          <Route path="/reminder" exact element={<ReminderComponent />} />
          <Route path="/music" exact element={<MusicPlayer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default DashboardPage;
