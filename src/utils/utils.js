import { nanoid } from "nanoid";

export const deleteCard = (array, id) => {
  const index = array.findIndex((task) => task.id === id);
  
  if (index === -1) {
    throw new Error('Can\'t delete unexisting card');
  }
  
  array = [
    ...array.slice(0, index),
    ...array.slice(index + 1),
  ];
  
return array
}

export const changeCardInfo = (array, card) => {
  const index = array.findIndex((item) => item.id === card.id);
  array = [
    ...array.slice(0, index),
    card,
    ...array.slice(index + 1),
  ];
  return array;
}
  
export const loadFromLocalStorage = () => {
    try {
      const stateStr = localStorage.getItem('cards');
      return stateStr ? JSON.parse(stateStr) : [];
    } catch (e) {
      console.error(e);
      return undefined;
  }
};

export const movCardUp = (array, card) => {

  const index = array.findIndex((item) => item.id === card.id);
  if (index === 0) {
    return array
  }

  const prev = array[index-1];
  array = [
    ...array.slice(0, index-1),
    card,
    prev,
    ...array.slice(index + 1),
  ];

  return array;
}
export const movCardDown = (array, card) => {

  const index = array.findIndex((item) => item.id === card.id);
  if (index === array.length - 1) {
    return array
  }
  
  const prev = array[index+1];
  array = [
    ...array.slice(0, index),
    prev,
    card,
    ...array.slice(index + 2),
  ];

  return array;
}

export const newCard = (num = 0) => {

  return {
    title: "Заголовок",
    id: nanoid(),
    text: "text",
    width: `${num ? 12 : 2}`,
    parentCard: num,
  };
}

const KeyCode = {
  ENTER: 'Enter',
  ESC: 'Esc',
  ESCAPE: 'Escape',
};

export const clickEsc = (evt) => {
  return evt.key === (KeyCode.ESCAPE || KeyCode.ESC);
};

export const clickEnter = (evt) => {
  return evt.key === (KeyCode.ENTER);
};