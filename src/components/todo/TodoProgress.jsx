import React from "react";
import ProgressBar from "./ProgressBar";



function TodoProgress( {todos} ) {

  // progress calculation
  const todoLength = todos.length
  const todoComplete = todos.filter((todo) => todo.completed === true).length
  const todoProgress = Math.floor((todoComplete / todoLength) * 100); 

  // props 
  const progressBarState = {
    size: 125,
    progress: todoProgress,
    strokeWidth: 10,
    circleOneStroke: '#d9edfe',
    circleTwoStroke: '#7ea9e1',
  };



  return (
    <>
    <h3>Todo Progress </h3>
      <ProgressBar {...progressBarState}/>
    </>
  );
}

export default TodoProgress;
