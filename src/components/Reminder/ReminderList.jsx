import React from "react";

function ReminderList({ reminders, setReminders }) {
  return (
    <>
      <ul className="reminder-list-component">
        {reminders.map((reminder) => (
          <div
            key={reminder.id}
            className={`reminder ${
              reminder.completed ? "Complete" : "Upcoming"
            }`}
          >
            <div className="reminder-item">
              <p className="reminder-item-name">{reminder.text}</p>
              <div className="reminder-item-time">
                <p>{reminder.date}</p>
                {reminder.time === "" ? "" : "|"}
                <p>{reminder.time}</p>
              </div>
              <div className="reminder-button">
                <button
                  className="complete-button"
                  onClick={() => {
                    setReminders(
                      reminders.filter((el) => el.id !== reminder.id)
                    );
                  }}
                >
                  <i className="fas fa-check"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}

export default ReminderList;
