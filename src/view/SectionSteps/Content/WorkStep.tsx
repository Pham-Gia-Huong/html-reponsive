import React from 'react'
interface WorkStepsProp {
  icon: number;
  caption: string;
}
const WorkStep = ({icon,caption}:WorkStepsProp) => {
  return (
    <div className="work-steps clearfix">
      <div>{icon}</div>
      <p>{caption}</p>
    </div>
  )
}

export default WorkStep