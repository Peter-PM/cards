import React from 'react';
import Card from '../card/card';

function CardsInCard({cards}) {

  return (
    <>
      {cards.map((card) => {
      return <Card key={card.id} card={card}/>})}
    </>
  );
}


export default CardsInCard;
