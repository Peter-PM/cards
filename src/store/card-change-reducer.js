import { createReducer } from "@reduxjs/toolkit";
import { addCard, delCard, changeCard, movingCardUp, movingCardDown } from './action';
import { changeCardInfo, movCardUp, movCardDown, deleteCard } from '../utils/utils';
import { CARDS } from '../mock';

const initialState = {
  cards: CARDS,
};

const chengeCards = createReducer(initialState, (builder) => {
  builder
    .addCase(addCard, (state, action) => {
      state.cards = action.payload ? [...state.cards, action.payload] : state.cards;
    })
    .addCase(delCard, (state, action) => {
      state.cards = action.payload ? deleteCard(state.cards, action.payload) : state.cards;
    })
    .addCase(changeCard, (state, action) => {
      state.cards = action.payload ? changeCardInfo(state.cards, action.payload) : state.cards;
    })
    .addCase(movingCardUp, (state, action) => {
      state.cards = action.payload ? movCardUp(state.cards, action.payload) : state.cards;
    })
    .addCase(movingCardDown, (state, action) => {
      state.cards = action.payload ? movCardDown(state.cards, action.payload) : state.cards;
    });
});

export { chengeCards };
