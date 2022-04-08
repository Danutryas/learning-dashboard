import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function DashboardReminder({ reminders, setReminders,filteredReminders}) {
  const reminderRender = filteredReminders[0];

  const completeButton = () => {
    setReminders(reminders.filter((el) => el.id !== reminderRender.id));
  };

  return (
    <div className={`reminder-Dashboard`}>
      <div className="card-header">
        <h3 className="card-title">reminder</h3>
        <Link to="/reminder">
          <button className="forward-button" title="Go to reminder page">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} inverse />
          </button>
        </Link>
      </div>
      <div className="reminder-status ">
        {reminderRender !== undefined ? (
          <div>
            <p>{reminderRender.text}</p>
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
