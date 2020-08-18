import React from 'react';
import './index.scss';
const SectionFeatureItem = ({
  icon,
  textHeader,
  textContent,
  size = '',
  color='',
}: {
  size?: string;
  icon: string;
  textHeader: string;
  textContent: string;
  color:string;
}) => {  
  return (
    <div className="col grid-1-4 box">
      <i style={{color}} className={`${icon} ${size}`}></i>
      <h3>{textHeader}</h3>
      <p>{textContent}</p>
    </div>
  );
};

export default SectionFeatureItem;
