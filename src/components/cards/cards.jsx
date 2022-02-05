import React from 'react';
import {connect} from 'react-redux';
import Card from '../card/card';

function Cards(props) {
 const {arr, cards} = props;
 
  return (
    <>
      {arr && arr.map((card, index) => {
        return <Card 
          key={card.id} 
          card={card} 
          first={index === 0 ? true:false} 
          last={index === arr.length-1 ? true:false}
        />
      })}
      {cards && cards.map((card, index) => {
        if (card.parentCard) {
          return false;
        }
      return <Card 
        key={card.id} 
        card={card} 
        first={index === 0 ? true:false} 
        last={index === cards.length-1 ? true:false}
      />
      })}
    </>
  );
}

const mapStateToProps = ({CARDS}) => ({
  cards: CARDS.cards,
});

export {Cards};
export default connect(mapStateToProps, null)(Cards);
