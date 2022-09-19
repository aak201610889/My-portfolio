import React from 'react'
import './level.scss'
function Leveles({ data }) {

  return (
    <div className="levels">
      <label>{ data.name}</label>
      <div className="level" >
        <div style={{ width: `${data.level}%` }}></div>
      </div>
        <label >{ data.level}%</label>
    </div>
  );
}

export default Leveles