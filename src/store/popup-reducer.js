import { viewPopup, addPopupCard } from './action';
import { createReducer } from "@reduxjs/toolkit";


const initialState = {
  popupView: false,
  popupCard: {},
};

const popup = createReducer(initialState, (builder) => {
  builder
    .addCase(viewPopup, (state, action) => {
      state.popupView = action.payload
    })
    .addCase(addPopupCard, (state, action) => {
      state.popupCard = action.payload
    });
});

export { popup };
