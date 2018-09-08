import React, { Component } from 'react';
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case 'bread-buttom':
        ingredient = <div className="">{classes.BreadBottom}</div>;
        break;
      case 'bread-top':
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seads1} />
            <div className={classes.Seads2} />
          </div>
        );
        break;
      case 'meat':
        ingredient = <div className={classes.Meat} />;
        break;
      case 'salad':
        ingredient = <div className={classes.Salad} />;
        break;
      case 'cheese':
        ingredient = <div className={classes.Cheese} />;
        break;
      case 'bacon':
        ingredient = <div className={classes.Cheese} />;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.PropTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
