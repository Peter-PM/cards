import React from 'react';
import {connect} from 'react-redux';
import Card from '../card/card';
import { getCard } from '../../store/selectors';

function Cards(props) {
 const {arr, cards} = props;

 const parrentCards = cards ? cards.filter((item)=> item.parentCard === 0) : [];

 
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

const mapStateToProps = (state) => ({
  cards: getCard(state),
});

export {Cards};
export default connect(mapStateToProps, null)(Cards);
