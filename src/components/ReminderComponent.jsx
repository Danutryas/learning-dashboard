import React, { useState,useEffect } from "react";
import "../styles/pages/css/ReminderComponent.css";
import ReminderForm from "./Reminder/ReminderForm";
import ReminderList from "./Reminder/ReminderList";

function ReminderComponent() {
    const [nameInput, setNameInput] = useState("");
    const [dateInput, setDateInput] = useState("");
    const [timeInput, setTimeInput] = useState("");
    const [reminders,setReminders]= useState([])


  useEffect(() => {
    getLocalReminders();
  }, []);

  useEffect(() => {
    saveLocalReminders();
  }, [reminders]);

  const saveLocalReminders = () => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  };
  const getLocalReminders = () => {
    if (localStorage.getItem("reminders") === null) {
      localStorage.setItem("reminders", JSON.stringify([]));
    } else {
      let reminderLocal = JSON.parse(localStorage.getItem("reminders"));
      setReminders(reminderLocal);
    }
  };



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
