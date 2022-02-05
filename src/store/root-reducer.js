import {combineReducers} from 'redux';
import { popup } from './popup-reducer';
import { chengeCards } from './card-change-reducer';

export const NameSpace = {
  CARDS: 'CARDS',
  POPUP: 'POPUP',
}

export default combineReducers({
  [NameSpace.POPUP]: popup,
  [NameSpace.CARDS]: chengeCards,
})