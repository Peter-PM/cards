import { createAction } from "@reduxjs/toolkit";

export const ActionType = {
  ADD_CARD: 'add-card_',
  DELETE_CARD: 'delete-card',
  ADD_CARD_IN_CARD: 'add-card-in-card',
  VIEW_POPUP: 'popup-view',
  POPUP_CARD: 'popup-card',
  CHANGE_CARD: 'change-card',
  MOVING_CARD_UP: 'moving-card-up',
  MOVING_CARD_DOWN: 'moving-card-down',
};

export const addCard = createAction(ActionType.ADD_CARD, (card)=> ({
  payload: card,
}));

export const delCard = createAction(ActionType.DELETE_CARD, (id)=> ({
  payload: id,
}));

export const changeCard = createAction(ActionType.CHANGE_CARD, (card)=> ({
  payload: card,
}));

export const viewPopup = createAction(ActionType.VIEW_POPUP, (bool)=> ({
  payload: Boolean(bool),
}));

export const movingCardUp = createAction(ActionType.MOVING_CARD_UP, (card)=> ({
  payload: card,
}));

export const movingCardDown = createAction(ActionType.MOVING_CARD_DOWN, (card)=> ({
  payload: card,
}));

export const addPopupCard = createAction(ActionType.POPUP_CARD, (card)=> ({
  payload: card,
}));
