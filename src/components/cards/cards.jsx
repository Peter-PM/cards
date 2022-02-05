import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../card/card';
import { getCard } from '../../store/selectors';

function Cards({arr}) {

  const cards = useSelector(getCard);
  let parrentCards;

  if (arr) {
    parrentCards = arr;
  } else {
    parrentCards = cards.filter((item)=> item.parentCard === 0);
  }

  return (
    <>
      {parrentCards.map((card, index) => {
      return <Card 
        key={card.id} 
        card={card} 
        first={index === 0 ? true:false} 
        last={index === parrentCards.length-1 ? true:false}
      />
      })}
    </>
  );
}

export default Cards;
