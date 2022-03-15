import React, { useState } from "react";
import "../styles/pages/css/ReminderComponent.css";
import ReminderForm from "./Reminder/ReminderForm";
import ReminderList from "./Reminder/ReminderList";

function ReminderComponent({ reminders, setReminders }) {
  const [nameInput, setNameInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  return (
    <div className="reminder-app">
      <div className="reminder-form">
        <h3>Reminder Form</h3>
        <ReminderForm
          nameInput={nameInput}
          dateInput={dateInput}
          timeInput={timeInput}
          reminders={reminders}
          setNameInput={setNameInput}
          setDateInput={setDateInput}
          setTimeInput={setTimeInput}
          setReminders={setReminders}
        />
      </div>
      <div className="reminder-list">
        <h3>Reminder List</h3>
        <ReminderList
          nameInput={nameInput}
          dateInput={dateInput}
          timeInput={timeInput}
          reminders={reminders}
          setReminders={setReminders}
        />
      </div>
    </div>
  );
}

export default ReminderComponent;
