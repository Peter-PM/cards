import { ActionType } from './action';
import { deleteCard, changeCard, newCard, movingCardUp, movingCardDown } from '../utils/utils';
import { CARDS } from '../mock';

const initialState = {
  cards: CARDS,
  popupView: false,
  popupCard: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, newCard()],
      };
    case ActionType.DELETE_CARD:
      return {
        ...state,
        cards: deleteCard(state.cards, action.payload),
      };
    case ActionType.ADD_CARD_IN_CARD:
      return {
        ...state,
        cards: [...state.cards, newCard(action.payload)],
      };
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
    case ActionType.CHANGE_CARD:
      return {
        ...state,
        cards: changeCard(state.cards, action.payload),
      };
    case ActionType.MOVING_CARD_UP:
      return {
        ...state,
        cards: movingCardUp(state.cards, action.payload),
      };
    case ActionType.MOVING_CARD_DOWN:
      return {
        ...state,
        cards: movingCardDown(state.cards, action.payload),
      };
    default:
      return state;
  }
};

export { reducer };
