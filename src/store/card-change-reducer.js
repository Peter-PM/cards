import { createReducer } from "@reduxjs/toolkit";
import { addCard, delCard, addCardInCard, changeCard, movingCardUp, movingCardDown } from './action';
import { changeCards, movCardUp, movCardDown, newCard, deleteCard } from '../utils/utils';
import { CARDS } from '../mock';

const initialState = {
  cards: CARDS,
};

const chengeCards = createReducer(initialState, (builder) => {
  builder
    .addCase(addCard, (state) => {
      state.cards = [...state.cards, newCard()];
    })
    .addCase(delCard, (state, action) => {
      state.cards = deleteCard(state.cards, action.payload);
    })
    .addCase(addCardInCard, (state, action) => {
      state.cards = [...state.cards, newCard(action.payload)];
    })
    .addCase(changeCard, (state, action) => {
      state.cards = changeCards(state.cards, action.payload);
    })
    .addCase(movingCardUp, (state, action) => {
      state.cards = movCardUp(state.cards, action.payload);
    })
    .addCase(movingCardDown, (state, action) => {
      state.cards = movCardDown(state.cards, action.payload);
    });
});

export { chengeCards };
