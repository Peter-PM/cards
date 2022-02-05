import { ActionType } from './action';
import { changeCard, movingCardUp, movingCardDown, newCard, deleteCard } from '../utils/utils';
import { CARDS } from '../mock';

const initialState = {
  cards: CARDS,
};

const chengeCards = (state = initialState, action) => {
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

export { chengeCards };
