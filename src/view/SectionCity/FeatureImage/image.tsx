import React from 'react';

interface CityImageProp {
  src: string;
  title: string;
}

const CityImage = ({src, title}: CityImageProp) => {
  return (
    <React.Fragment>
      <img src={src} />
      <h3>{title}</h3>
    </React.Fragment>
  );
};

export default CityImage;
