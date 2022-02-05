import React from 'react';
import {connect} from 'react-redux';
import { addCard } from '../../store/action';
import styles from './add-card.module.scss';

function AddCard({ addCard }) {
  return (
    <>
      <button
        className={styles.button}
        type="button"
        onClick={addCard}
      >
        Добавить карточку
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} viewBox="0 0 512 512"><title>Add</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 112v288M400 256H112"/></svg>
      </button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addCard() {
    dispatch(addCard());
  }
});

export default connect(null, mapDispatchToProps)(AddCard);
