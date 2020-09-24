import React from 'react';

interface CityFeatureProps {
  icon: string;
  caption: string;
}
const CityFeature = ({icon, caption}: CityFeatureProps) => {
  return (
    <div className="city-feature">
      <i className={icon}></i>
      <a href="#">{caption}</a>
    </div>
  );
};

export default CityFeature;
