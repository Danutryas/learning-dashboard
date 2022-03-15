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
    circleOneStroke: "#173f4f",
    circleTwoStroke: "#41495C",
  };
// #41495C
// #3d4a68
// #173f4f

  return (
    <>
    <h3>Todo Progress </h3>
      <ProgressBar {...progressBarState}/>
    </>
  );
}

export default TodoProgress;
