import { NameSpace } from "./root-reducer";

export const getCard = (state) => state[NameSpace.CARDS].cards;
export const getPopupView = (state) => state[NameSpace.POPUP].popupView;
export const getPopupCard = (state) => state[NameSpace.POPUP].popupCard;