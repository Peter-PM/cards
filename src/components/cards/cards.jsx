import React from 'react';
import {connect} from 'react-redux';
import Card from '../card/card';

function Cards({cards}) {

  return (
    <>
      {cards.map((card) => {
        if (card.parentCard) {
          return;
        }
      return <Card key={card.id} card={card}/>})}
    </>
  );
}

const mapStateToProps = (state) => ({
  cards: state.cards,
});


export default connect(mapStateToProps, null)(Cards);
