export const ActionType = {
  ADD_CARD: 'add-task',
  DELETE_CARD: 'delete-card',
  ADD_CARD_IN_CARD: 'add-card-in-card',
  VIEW_POPUP: 'popup-view',
  POPUP_CARD: 'popup-card',
  CHANGE_CARD: 'change-card',
  MOVING_CARD_UP: 'moving-card-up',
  MOVING_CARD_DOWN: 'moving-card-down',
};

export const ActionCreator = {
  addCard: (card) => ({
    type: ActionType.ADD_CARD,
    payload: card,
  }),
  deleteCard: (card) => ({
    type: ActionType.DELETE_CARD,
    payload: card,
  }),
  changeCard: (card) => ({
    type: ActionType.CHANGE_CARD,
    payload: card,
  }),
  movingCardUp: (card) => ({
    type: ActionType.MOVING_CARD_UP,
    payload: card,
  }),
  movingCardDown: (card) => ({
    type: ActionType.MOVING_CARD_DOWN,
    payload: card,
  }),
  addCardInCard: (num) => ({
    type: ActionType.ADD_CARD_IN_CARD,
    payload: num,
  }),
  viewPopup: (bool) => ({
    type: ActionType.VIEW_POPUP,
    payload: bool,
  }),
  popupCard: (card) => ({
    type: ActionType.POPUP_CARD,
    payload: card,
  }),

};
