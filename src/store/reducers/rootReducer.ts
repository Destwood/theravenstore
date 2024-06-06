import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

import GhostOfTsushima from "../../assets/ghost-of-tsushima-directors-cut-cis-no-rus.jpg";
import HeartsOfIron4 from "../../assets/hearts-of-iron-4.jpg";
import DS3 from "../../assets/dark-souls-3.jpg";
import Detroit from "../../assets/detroit-become-human.jpg";
import MenOfWar from "../../assets/hearts-of-iron-4.jpg";
import GTAV from "../../assets/grand-theft-auto-v-premium-edition.jpg";
import ManorLords from "../../assets/manor-lords.jpg";
import DeadCells from "../../assets/dead-cells.jpg";
import MK11 from "../../assets/mortal-kombat-11.jpg"

const initialProductsState = [
  {
    amount: 0,
    title: "GHOST OF TSUSHIMA DIRECTOR'S CUT",
    imageUrl: GhostOfTsushima,
    price: 2045
  },
  {
    amount: 0,
    title: "HEARTS OF IRON IV: CADET EDITION",
    imageUrl: HeartsOfIron4,
    price: 309
  },
  {
    amount: 0,
    title: "DARK SOULS III",
    imageUrl: DS3,
    price: 394
  },
  {
    amount: 0,
    title: "DETROIT: BECOME HUMAN",
    imageUrl: Detroit,
    price: 198
  },
  {
    amount: 0,
    title: "MEN OF WAR II DELUXE EDITION",
    imageUrl: MenOfWar,
    price: 679
  },
  {
    amount: 0,
    title: "GRAND THEFT AUTO V: PREMIUM EDITION",
    imageUrl: GTAV,
    price: 559
  },
  {
    amount: 0,
    title: "MANOR LORDS",
    imageUrl: ManorLords,
    price: 563
  },
  {
    amount: 0,
    title: "DEAD CELLS",
    imageUrl: DeadCells,
    price: 93
  },
  {
    amount: 0,
    title: "MORTAL KOMBAT 11",
    imageUrl: MK11,
    price: 93
  }
];

const productsReducer = (state = initialProductsState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export default rootReducer;