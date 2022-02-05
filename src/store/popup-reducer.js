import { viewPopup, popupCard } from './action';
import { createReducer } from "@reduxjs/toolkit";


const initialState = {
  popupView: false,
  popupCard: {},
};

// const popup = (state = initialState, action) => {
//   switch (action.type) {
//     case ActionType.VIEW_POPUP:
//       return {
//         ...state,
//         popupView: action.payload,
//       };
//     case ActionType.POPUP_CARD:
//       return {
//         ...state,
//         popupCard: action.payload,
//       };
//     default:
//       return state;
//   }
// };

const popup = createReducer(initialState, (builder) => {
  builder
    .addCase(viewPopup, (state, action) => {
      state.popupView = action.payload
    })
    .addCase(popupCard, (state, action) => {
      state.popupCard = action.payload
    });
});

export { popup };
