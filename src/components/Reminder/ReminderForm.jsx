import React from "react";

function ReminderForm({
  nameInput,
  dateInput,
  timeInput,
  setNameInput,
  setDateInput,
  setTimeInput,
  setReminders,
  reminders,
}) {
  const nameInputHandler = (e) => {
    setNameInput(e.target.value);
  };
  const dateInputHandler = (e) => {
    setDateInput(e.target.value);
  };
  const timeInputHandler = (e) => {
    setTimeInput(e.target.value);
  };

  const submitFormHandler = () => {
    if (nameInput !== "" && dateInput !== "")  {
      setReminders([
        ...reminders,
        {
          text: nameInput,
          date: dateInput,
          time: timeInput,
          id: Math.floor(Math.random() * 1000),
          completed: false,
        },
      ]);
    }
    setNameInput("");
  };

  return (
    <>
      <div className="reminder-input">
        <input type="text" value={nameInput} onChange={nameInputHandler} />
        <div className="time-form">
          <input type="date" onChange={dateInputHandler} />
          <input type="time" onChange={timeInputHandler} />
        </div>
        <input type="button" value="SUBMIT" onClick={submitFormHandler} />
      </div>
    </>
  );
}

export default ReminderForm;
