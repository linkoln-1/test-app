import React from "react";
import mail from "./icons/mail_FILL1_wght400_GRAD0_opsz48.svg";
import user from "./icons/person_FILL1_wght700_GRAD0_opsz40.svg";

function RightContent() {
  return (
    <div className="right__content">
      <div className="header__right__content">
        <div className="header__left__item">
          <span>главная ></span> <span>мои магазины</span>
        </div>
        <div className="header__right__item">
          <div className="mail">
            <img src={mail} alt="" />
          </div>
          <div className="user">
            <img src={user} alt="" />
            <span>Максим Добжанский</span>
          </div>
        </div>
      </div>
      <div className="content__button">
        <button>
          <span>+</span> создать свой магазин
        </button>
      </div>
      <div className="popup__window">
        <div className="popup__absolute">
          <div className="header__popup">
            <div className="popup__tittle">
              <h3>Cоздать магазин</h3>
            </div>
            <div className="close">
              <button className="btn-close"></button>
            </div>
          </div>
          <div className="popup__select">
            <div className="popup__template">
              <span>Шаблон</span>
              <div className="select__category">
                <select name="classic" id="classic">
                  <option value="Стандартный">Стандартный</option>
                </select>
              </div>
            </div>

            <div className="popup__color__schema">
              <span>Цветовая схема</span>
              <div className="select__color__schema">
                <select name="classic" id="classic">
                  <option value="Стандартный">Классическая</option>
                </select>
              </div>
            </div>
          </div>
          <div className="popup__domain__enter__input">
            <span>Домен</span>

            <div className="popup__input__button">
              <input placeholder="Например ivangrozny" type="text" />
              <button>.work5.ru</button>
            </div>
          </div>
          <div className="popup__warning">
            <div className="custom__icon">
              <div>i</div>
            </div>
            <div className="popup__warning__text">
              В названии домена разрешены латиницы и "-", запрещается
              использовать словосочетание Work 5. После создания магазина вы
              сможете прикрутить свой домен (например ivangrozny). Подробнее по{" "}
              <a href="# ">ссылке</a>
            </div>
          </div>

          <div className="footer__popup__button">
            <button className="cancel">Отмена</button>
            <button className="create">Создать</button>
          </div>
        </div>

        <div className="set_block">
          <div className="set_block_content">
            <span>Действия</span>

            <div className="set_block_button">
              <button className="create-redict">Редактировать</button>
              <button className="cancel-redict">Редактировать</button>
            </div>
            <hr />
            <div className="set_block_button">
              <button className="create-redict">Редактировать</button>
              <button className="cancel-redict">Редактировать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightContent;
