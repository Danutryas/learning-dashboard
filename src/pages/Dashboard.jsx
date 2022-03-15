import MusicPlayer from "../components/MusicPlayer";
import ReminderComponent from "../components/ReminderComponent";
import SideBarComponent from "../components/SideBarComponent";
import TodoComponent from "../components/TodoComponent";
import "../styles/pages/css/Dashboard.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import DashboardComponent from "../components/DashboardComponent";
import React, { useState, useEffect } from "react";

const DashboardPage = () => {
  // state for todo
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("uncompleted");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // state for reminder
  const [reminders, setReminders] = useState([]);
  const [filteredReminders, setFilteredReminders] = useState([]);

  useEffect(() => {
    localGet();
  }, [setReminders]);

  useEffect(() => {
    // filterHandler();
    // saveLocalTodos();
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("reminders", JSON.stringify(reminders));
    setFilteredReminders(reminders.filter((el) => el.completed === false));
    // filter todo
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  }, [todos, status, reminders, setFilteredReminders]);

  const localGet = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
    if (localStorage.getItem("reminders") === null) {
      localStorage.setItem("reminders", JSON.stringify([]));
    } else {
      let reminderLocal = JSON.parse(localStorage.getItem("reminders"));
      setReminders(reminderLocal);
    }
  };

  return (
    <Router>
      <SideBarComponent />
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route
            path="/dashboard"
            exact
            element={
              <DashboardComponent
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
                setFilteredTodos={setFilteredTodos}
                reminders={reminders}
                setReminders={setReminders}
                filteredReminders={filteredReminders}
                setFilteredReminders={setFilteredReminders}
              />
            }
          />
          <Route
            path="/todo"
            exact
            element={
              <TodoComponent
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                status={status}
                setStatus={setStatus}
                filteredTodos={filteredTodos}
                setFilteredTodos={setFilteredTodos}
              />
            }
          />
          <Route
            path="/reminder"
            exact
            element={
              <ReminderComponent
                reminders={reminders}
                setReminders={setReminders}
              />
            }
          />
          <Route path="/music" exact element={<MusicPlayer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default DashboardPage;
