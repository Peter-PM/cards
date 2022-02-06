import {
  addCard,
  delCard,
  changeCard,
  viewPopup,
  movingCardDown,
  movingCardUp,
  addPopupCard,
  ActionType
} from './action';

describe('Actions', () => {

  it('Проверка объекта, возвращаемого addCard', () => {

    const returnedObj = {
      type: ActionType.ADD_CARD
    };

    expect(addCard()).toEqual(returnedObj);
  });

  it('Проверка объекта, возвращаемого delCard', () => {

    const card = {
      title: "Заголовок 1",
      id: 1,
      text: "text",
      width: 3,
      parentCard: 0,
    };
    const returnedObj = {
      type: ActionType.DELETE_CARD,
      payload: card,
    };

    expect(delCard(card)).toEqual(returnedObj);
  });

  it('Проверка объекта, возвращаемого changeCard', () => {

    const card = {
      title: "Заголовок 1",
      id: '',
      text: "text",
      width: 3,
      parentCard: 0,
    };
    const returnedObj = {
      type: ActionType.CHANGE_CARD,
      payload: card,
    };

    expect(changeCard(card)).toEqual(returnedObj);
  });

  it('Проверка объекта, возвращаемого viewPopup', () => {

    const bool = false;
    const returnedObj = {
      type: ActionType.VIEW_POPUP,
      payload: bool,
    };

    expect(viewPopup(false)).toEqual(returnedObj);
  });

  it('Проверка объекта, возвращаемого movingCardUp', () => {

    const card = {
      title: "Заголовок 1",
      id: '',
      text: "text",
      width: 3,
      parentCard: 0,
    };
    const returnedObj = {
      type: ActionType.MOVING_CARD_UP,
      payload: card,
    };

    expect(movingCardUp(card)).toEqual(returnedObj);
  });

  it('Проверка объекта, возвращаемого movingCardDown', () => {

    const card = {
      title: "Заголовок 1",
      id: '',
      text: "text",
      width: 3,
      parentCard: 0,
    };
    const returnedObj = {
      type: ActionType.MOVING_CARD_DOWN,
      payload: card,
    };

    expect(movingCardDown(card)).toEqual(returnedObj);
  });

  it('Проверка объекта, возвращаемого addPopupCard', () => {

    const card = {
      title: "Заголовок 1",
      id: '',
      text: "text",
      width: 3,
      parentCard: 0,
    };
    const returnedObj = {
      type: ActionType.POPUP_CARD,
      payload: card,
    };

    expect(addPopupCard(card)).toEqual(returnedObj);
  });
})
