import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function DashboardReminder() {
  const [reminders, setReminders] = useState([]);
  const [filteredReminders, setFilteredReminders] = useState([]);

  const reminder = filteredReminders[0];

  // useEffect
  useEffect(() => {
    localGet();
  }, [setReminders]);

  useEffect(() => {
    // localsave
    localSave()
    setFilteredReminders(reminders.filter((el) => el.completed === false));
  }, [reminders, setFilteredReminders]);

  // get data from database

  const localSave = () => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  };

  const localGet = () => {
    if (localStorage.getItem("reminders") === null) {
      localStorage.setItem("reminders", JSON.stringify([]));
    } else {
      let reminderLocal = JSON.parse(localStorage.getItem("reminders"));
      setReminders(reminderLocal);
    }
  };
  const completeButton = () => {
    setReminders(reminders.filter((el) => el.id !== reminder.id));
  };

  return (
    <div className={`reminder-Dashboard`}>
      {console.log(reminders)}
      <div className="card-header">
        <h3 className="card-title">reminder</h3>
        <Link to="/reminder">
          <button className="forward-button" title="Go to reminder page">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} inverse />
          </button>
        </Link>
      </div>
      <div className="reminder-status ">
        <p className="card-text">Up Coming reminder</p>
        {reminder !== undefined ? (
          <div>
            <p>{reminder.text}</p>
            <button onClick={completeButton}>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="2xl"
                style={{ color: "#87B87F" }}
              />
            </button>
          </div>
        ) : (
          <div>
            <p>There is no Reminder</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardReminder;
