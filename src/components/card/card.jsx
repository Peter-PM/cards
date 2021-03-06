import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { movingCardUp, movingCardDown, viewPopup, addPopupCard } from "../../store/action";
import styles from "./card.module.scss";
import Cards from "../cards/cards";
import { getCard } from "../../store/selectors";

function Card({
  card,
  first,
  last
}) {

  const cards = useSelector(getCard);
  const dispatch = useDispatch();

  const TaskWidth = {
    width: `${(100 / 12) * card.width}%`,
  };

  const renderInteralCards = () => {
    if (cards.length === 0) {
      return;
    }
    return cards.filter((item) => item.parentCard === card.id);
  };
  const arr = renderInteralCards();

  return (
    <div className={styles.task} style={TaskWidth}>
      <div className={styles.contents}>
        <h2 className={styles.title}>{card.title}</h2>
        {arr.length ? (
          <>
            <p className={styles.note}>{card.text}</p>
            <Cards arr={arr} />
          </>
        ) : (
          <p className={styles.note}>{card.text}</p>
        )}
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.button}
          type="button"
          aria-label="Изменить карточку"
          onClick={() => {
            dispatch(addPopupCard(card));
            dispatch(viewPopup(true));
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>Options</title>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80"
            />
            <circle
              cx="336"
              cy="128"
              r="32"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <circle
              cx="176"
              cy="256"
              r="32"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <circle
              cx="336"
              cy="384"
              r="32"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        </button>
        <button
          disabled={first}
          className={`${styles.button} ${first ? styles.button_disabled : ''}`}
          type="button"
          aria-label="Поднять карточку"
          onClick={() => {
            dispatch(movingCardUp(card));
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>Up</title>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="48"
              d="M112 328l144-144 144 144"
            />
          </svg>
        </button>
        <button
          disabled={last}
          className={`${styles.button} ${last ? styles.button_disabled : ''}`}
          type="button"
          aria-label="Опустить карточку"
          onClick={() => {
            dispatch(movingCardDown(card));
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>Down</title>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="48"
              d="M112 184l144 144 144-144"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Card;
