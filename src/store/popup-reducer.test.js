import { popup } from './popup-reducer';
import { viewPopup, addPopupCard, ActionType } from './action';

describe('Проверка редьюсера popup', () => {
  const state = {
    popupView: 1,
    popupCard: {},
  }
  it('Проверка объекта, возвращаемого popup при несовпадении кейсов', () => {
    expect(popup(undefined, {}))
    .toEqual({
      popupView: false,
      popupCard: {},
    });
  });

  it('Проверка объекта, возвращаемого popup при кейсе viewPopup', () => {
    
    expect(popup(state, viewPopup(true)))
    .toEqual({
      popupView: true,
      popupCard: {},
    });
    expect(popup(state, viewPopup(1)))
    .toEqual({
      popupView: true,
      popupCard: {},
    });
    expect(popup(state, viewPopup('...')))
    .toEqual({
      popupView: true,
      popupCard: {},
    });
    expect(popup(state, viewPopup(false)))
    .toEqual({
      popupView: false,
      popupCard: {},
    });
    expect(popup(state, viewPopup(0)))
    .toEqual({
      popupView: false,
      popupCard: {},
    });
    expect(popup(state, viewPopup('')))
    .toEqual({
      popupView: false,
      popupCard: {},
    });
    expect(popup(state, viewPopup(undefined)))
    .toEqual({
      popupView: false,
      popupCard: {},
    });
  });

  it('Проверка объекта, возвращаемого popup при кейсе addPopupCard', () => {

    const card = {1: 3, 2: 4}
    const nonAddPopupCard = {
      type: ActionType.POPUP_CARD,
      payload: undefined,
    }
    expect(popup(state, addPopupCard(card)))
    .toEqual({
      popupView: 1,
      popupCard: card,
    });
    expect(popup(state, nonAddPopupCard))
    .toEqual({
      popupView: 1,
      popupCard: {},
    });
  });

})