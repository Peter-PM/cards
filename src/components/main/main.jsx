import React from 'react';
import styles from './main.module.scss';
import Board from '../board/board';

function Main() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Мэйн</h1>
      <Board/>
    </main>
  );
}

export default Main;
