import { chengeCards } from './card-change-reducer';
import { addCard, delCard, changeCard, movingCardUp, movingCardDown, ActionType } from './action';
import { CARDS } from '../mock';
import { deleteCard, movCardUp, movCardDown, changeCardInfo } from '../utils/utils'

describe('Проверка редьюсера chengeCards', () => {
  const state = {
    cards: CARDS,
  }
  it('Проверка объекта, возвращаемого popup при несовпадении кейсов', () => {
    expect(chengeCards(undefined, {}))
    .toEqual({
      cards: CARDS
    });
  });

  it('Проверка объекта, возвращаемого popup при кейсе addCard', () => {

    const card = {1: 3, 2: 4};
    const nonAddPopupCard = {
      type: ActionType.ADD_CARD,
      payload: undefined,
    }
    expect(chengeCards(state, addCard(card)))
    .toEqual({
      cards: [...state.cards, card],
    });
    expect(chengeCards(state, nonAddPopupCard))
    .toEqual({
      cards: CARDS,
    });

  });

  it('Проверка объекта, возвращаемого popup при кейсе delCard', () => {

    const nonAddPopupCard = {
      type: ActionType.DELETE_CARD,
      payload: undefined,
    }
    const cardId = state.cards[2].id;
    const newCards = deleteCard(state.cards, cardId);

    expect(chengeCards(state, delCard(cardId)))
    .toEqual({
      cards: newCards
    });
    expect(chengeCards(state, nonAddPopupCard))
    .toEqual({
      cards: CARDS,
    });

  });

  it('Проверка объекта, возвращаемого popup при кейсе movingCardUp', () => {

    const nonAddPopupCard = {
      type: ActionType.MOVING_CARD_UP,
      payload: undefined,
    }
    const card = state.cards[1];
    const newCards = movCardUp(state.cards, card)

    expect(chengeCards(state, movingCardUp(card)))
    .toEqual({
      cards: newCards
    });
    expect(chengeCards(state, nonAddPopupCard))
    .toEqual({
      cards: CARDS,
    });

  });

  it('Проверка объекта, возвращаемого popup при кейсе movingCardDown', () => {

    const nonAddPopupCard = {
      type: ActionType.MOVING_CARD_DOWN,
      payload: undefined,
    }
    const card = state.cards[2];
    const newCards = movCardDown(state.cards, card)

    expect(chengeCards(state, movingCardDown(card)))
    .toEqual({
      cards: newCards
    });
    expect(chengeCards(state, nonAddPopupCard))
    .toEqual({
      cards: CARDS,
    });

  });

  it('Проверка объекта, возвращаемого popup при кейсе changeCard', () => {

    const nonAddPopupCard = {
      type: ActionType.CHANGE_CARD,
      payload: undefined,
    }
    const card = {...state.cards[2], title: '1111'};

    const newCards = changeCardInfo(state.cards, card)

    expect(chengeCards(state, changeCard(card)))
    .toEqual({
      cards: newCards
    });
    expect(chengeCards(state, nonAddPopupCard))
    .toEqual({
      cards: CARDS,
    });

  });

})