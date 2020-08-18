import React from 'react';
import './index.scss';
import {Button} from 'src/components';
const Content = () => {
  return (
    <div className="header-content">
      <h1>
        Goodbye junk food.
        <br /> Hello super healthy meals.
      </h1>
      <Button text={'I’m hungry'} className="btn-full"/>
      <Button text={'Show me more'} className="btn-ghost"/>
    </div>
  );
};

export default Content;
