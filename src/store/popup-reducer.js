import { ActionType } from './action';

const initialState = {
  popupView: false,
  popupCard: {},
};

const popup = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.VIEW_POPUP:
      return {
        ...state,
        popupView: action.payload,
      };
    case ActionType.POPUP_CARD:
      return {
        ...state,
        popupCard: action.payload,
      };
    default:
      return state;
  }
};

export { popup };
