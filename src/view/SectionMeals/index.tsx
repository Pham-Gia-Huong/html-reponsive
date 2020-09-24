import React from 'react';
import MealsList from './List';
import {LIST_MEAL_1,LIST_MEAL_2} from '../../contants/sectionMeal'
import './index.scss'

export interface SectionMeal {
  url: string;
  alt: string;
}

const SectionMeals = () => {
  return (
    <section className="section-meals">
      <MealsList listMeal={LIST_MEAL_1}/>
      <MealsList listMeal={LIST_MEAL_2}/>
    </section>
  );
};

export default SectionMeals;
