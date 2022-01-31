import React from 'react';
import styles from './board.module.scss';
import Cards from '../cards/cards';
import AddCard from '../add-card/add-card';

function Board() {
  return (
    <section className={styles.section}>
      <Cards/>
      <AddCard/>
    </section>
  );
}

export default Board;
