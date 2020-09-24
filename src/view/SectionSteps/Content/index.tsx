import React from 'react';
import WorkSteps from './WorkStep';
import {WORK_STEPS_LIST} from '../../../contants/sectionWorkSteps';
import ButtonApp from './ButtonApp';
const StepsContent = () => {
  return (
    <div className="row">
      <div className="col grid-2 steps-box">
        <img src="image/app-iPhone.png" alt="Omnifood app on iPhone" className="app-screen" />
      </div>
      <div className="col grid-2 steps-box">
        {WORK_STEPS_LIST.map((workStep) => (
          <WorkSteps {...workStep} />
        ))}
        <ButtonApp src={'image/download-app.svg'}/>
        <ButtonApp src={'image/download-app-android.png'}/>
      </div>
    </div>
  );
};

export default StepsContent;
