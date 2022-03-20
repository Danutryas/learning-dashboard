import React from 'react'

function TodoDetail({ linkHandler,type ,value}) {
  return (
    <div>
      <input type={type} onChange={linkHandler} value={value}/>

      {/* box result */}
      {/* add button */}
    </div>
  );
}

export default TodoDetail