import React from 'react';
import {SectionMeal} from '../index';
import MealsItem from './Items';
const MealsList = ({listMeal}: {listMeal: SectionMeal[]}) => {
  return (
    <ul className="meals-showcase clearfix">
      {listMeal.map((mealItem) => (
        <MealsItem {...mealItem} />
      ))}
    </ul>
  );
};

export default MealsList;
