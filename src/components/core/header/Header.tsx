import { FC } from "react";

import "./styles.scss";
import { InputSearch } from "../../core";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="/dentsu-logo.svg" height={32} alt="Dentsu Logo" />
          <span>World Services</span>
        </div>
        <div className="header__search">
          <InputSearch />
        </div>
      </div>
    </header>
  );
};

export default Header;
