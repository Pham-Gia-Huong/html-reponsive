import React from 'react';
import {SectionMeal} from '../../index';
const MealsItem = (props: SectionMeal) => {
  return (
    <li>
      <figure className="meals-photo">
        <img src={props.url} alt={props.alt} />
      </figure>
    </li>
  );
};

export default MealsItem;
