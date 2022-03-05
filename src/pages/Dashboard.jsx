import TodoComponent from "../components/TodoComponent";
import "../styles/pages/css/Dashboard.css";

const DashboardPage = () => {
  return (
    <>
      <div className="dashboard">
        <div className="side-bar">Sidebar</div>
        <div className="header">Header</div>
        <div className="content">
          <div className="content-left">
            <div className="content-left-top">
              <TodoComponent />
            </div>
            <div className="content-left-bottom">Content 1 left-bot</div>
          </div>
          <div className="content-right">Content 2</div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
