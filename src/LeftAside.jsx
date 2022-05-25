import React from "react";
import icon_home from "./icons/house_FILL1_wght700_GRAD0_opsz40.svg";
import shoping_Cart from "./icons/shopping_cart_FILL1_wght700_GRAD0_opsz40.svg";
import megaphone from "./icons/campaign_FILL1_wght700_GRAD0_opsz40.svg";
import statistic from "./icons/data_usage_FILL1_wght700_GRAD0_opsz40.svg";
import wallet from "./icons/gpay_FILL1_wght700_GRAD0_opsz40.svg";
import user from "./icons/person_FILL1_wght700_GRAD0_opsz40.svg";
import help from "./icons/help_FILL1_wght700_GRAD0_opsz40.svg";
import head_phone from "./icons/headset_mic_FILL1_wght700_GRAD0_opsz40.svg";
import exit from "./icons/logout_FILL1_wght700_GRAD0_opsz40.svg";

function LeftAside(props) {
  return (
    <div className="left__aside">
      <div className="logo__aside">
        <img
          src="https://www.work5.ru/image/logo_work5_fb_and_twitter_1200x630.png"
          alt="work 5"
        />
      </div>

      <div className="menu__aside">
        <menu>
          <li>
            <img src={icon_home} alt="" />
            Главная
          </li>
          <li>
            <img src={shoping_Cart} />
            Мои магазины
          </li>
          <li>
            <img src={megaphone} alt="" />
            Промоматериалы
          </li>
          <li>
            <img src={statistic} alt="" />
            Статистика
          </li>
          <li>
            <img src={wallet} alt="" />
            Баланс
          </li>
          <li>
            <img src={user} alt="" />
            Персональные данные
          </li>
          <li>
            <img src={help} alt="" />
            FAQ
          </li>
          <li>
            <img src={head_phone} alt="" />
            Техподдержка
          </li>
          <li>
            <img src={exit} alt="" />
            Выход
          </li>
        </menu>
      </div>
    </div>
  );
}

export default LeftAside;
