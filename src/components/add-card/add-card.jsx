import React from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../store/action';
import styles from './add-card.module.scss';

function AddCard() {

  const dispatch = useDispatch();

  return (
    <>
      <button
        className={styles.button}
        type="button"
        onClick={()=>dispatch(addCard())}
      >
        Добавить карточку
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} viewBox="0 0 512 512"><title>Add</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 112v288M400 256H112"/></svg>
      </button>
    </>
  );
}

export default AddCard;
 