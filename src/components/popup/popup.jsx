import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { viewPopup, delCard, addCardInCard, changeCard } from "../../store/action";
import styles from "./popup.module.scss";
import { clickEsc, clickEnter } from "../../utils/utils";
const FocusTrap = require("focus-trap-react");

function Popup({ viewPopup, closePopup, popupCard, changeCard, deleteCard, addCardInCard }) {
  const [activeCard, setCard] = useState(popupCard);

  useEffect(() => {
    setCard(popupCard);
  }, [popupCard]);

  const handleClosePopup = () => {
    closePopup(false);
    document.removeEventListener("keydown", handleEscKeyDown);
  };

  const handleEscKeyDown = (evt) => {
    if (clickEsc(evt)) {
      evt.preventDefault();
      handleClosePopup();
    }
  };
  const handleEnterKeyDown = (evt) => {
    if (clickEnter(evt)) {
      evt.preventDefault();
      handleSaveCanges();
      document.removeEventListener("keydown", handleEscKeyDown);
    }
  };

  const handleSaveCanges = () => {
    changeCard(activeCard);
    handleClosePopup();
  };

  const handleAddCanges = () => {
    addCardInCard(activeCard.id);
    handleClosePopup();
  };

  const handleDelButton = () => {
    deleteCard(activeCard.id);
    handleClosePopup();
  };

  return (
    <>
      {viewPopup ? (
        <FocusTrap>
          <section
            className={`${viewPopup ? styles.container : styles.popupOff}`}
            onClick={handleClosePopup}
          >
            <section
              className={styles.popup}
              onClick={(evt) => evt.stopPropagation()}
            >
              <h2 className={styles.title}>Редактировать карточку</h2>
              <button
                className={styles.close}
                type="button"
                onClick={handleClosePopup}
              >
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6399 15.0096L7.50482 8.86495L1.36977 15.0096L0 13.6399L6.14469 7.50482L0 1.36978L1.36977 0L7.50482 6.14469L13.6399 0.00964652L15 1.36978L8.86495 7.50482L15 13.6399L13.6399 15.0096Z"
                    fill="#9F9E9E"
                  />
                </svg>
              </button>
              <form className={styles.form} name="form">
                <input
                  className={styles.input}
                  type="text"
                  name="title"
                  placeholder="Введите заголовок"
                  autoFocus
                  value={activeCard.title}
                  onChange={(evt) => {
                    setCard({
                      ...activeCard,
                      title: evt.target.value,
                    });
                  }}
                  onKeyPress={handleEnterKeyDown}
                />

                <input
                  className={styles.input}
                  type="text"
                  name="title"
                  placeholder="Введите текст"
                  value={activeCard.text}
                  onChange={(evt) => {
                    setCard({
                      ...activeCard,
                      text: evt.target.value,
                    });
                  }}
                  onKeyPress={handleEnterKeyDown}
                />

                <input
                  className={styles.input}
                  type="number"
                  name="width"
                  min="1"
                  max="12"
                  placeholder="Ширина от 1 до 12"
                  value={activeCard.width}
                  onChange={(evt) => {
                    setCard({
                      ...activeCard,
                      width: +evt.target.value,
                    });
                  }}
                  onKeyPress={handleEnterKeyDown}
                />

                <button
                  className={styles.button}
                  type="button"
                  onClick={handleSaveCanges}
                >
                  Сохранить изменения
                </button>
                <button
                  className={`${styles.button} ${styles.button_add}`}
                  type="button"
                  onClick={handleAddCanges}
                >
                  Добавить карточку
                </button>
                <button
                  className={`${styles.button} ${styles.button_delete}`}
                  type="button"
                  onClick={handleDelButton}
                >
                  Удалить карточку
                </button>
              </form>
            </section>
          </section>
        </FocusTrap>
      ) : (
        false
      )}
    </>
  );
}

Popup.propTypes = {
  viewPopup: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  popupCard: PropTypes.object.isRequired,
};

const mapStateToProps = ({POPUP}) => ({
  viewPopup: POPUP.popupView,
  popupCard: POPUP.popupCard,
});

const mapDispatchToProps = (dispatch) => ({
  closePopup() {
    dispatch(viewPopup(false));
  },
  changeCard(card) {
    dispatch(changeCard(card));
  },
  deleteCard(id) {
    dispatch(delCard(id));
  },
  addCardInCard(id) {
    dispatch(addCardInCard(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
