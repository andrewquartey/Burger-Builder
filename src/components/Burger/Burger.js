import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  const ingredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map(_ => (
        <BurgerIngredient type={ingredientKey} />
      ));
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  console.log(ingredients);

  if (ingredients < 1) {
    ingredients = 'Plaes add yor ingredients';
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
