import React from "react";
import "./style.css";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import star from "../../assets/star.svg";
import lamp from "../../assets/Lamp.svg";
import bell from "../../assets/bell.svg";
import fox from "../../assets/fox-authorization.svg";
import arrow from "../../assets/arow down.svg";


function Header() {
  return (
    <div className="header content">
      <div className="header__top">
        <div className="top__logo">
          <img src={logo} alt="" className="logo__image" />
          <p className="logo__text">Dynamicast</p>
        </div>
        <div className="top__search">
          <input type="text" name="Example" id="search-line" />
          <button className="search__button">
            <img className="button__image" src={search} alt="" />
          </button>
        </div>
        <div className="top__other-icon">
          <div className="other-icon__watch-later">
            <img src={star} alt="" className="watch-later__icon" />
            <p className="watch-later__text">Watch later</p>
          </div>
          <img className="other-icon__lamp" src={lamp} />
          <img className="other-icon__bell" src={bell} />
          <button className="other-icon__authorize">
            <img
              className="authorize__mask"
              src={fox}
              alt=""
            />
            <p className="authorize__text">Authorize</p>
          </button>
        </div>
      </div>
      <hr />
      <div className="header__foot">
        <div className="foot__selector sort">
          <h2 className="selector__title">Sort:</h2>
          <button className="selector__select-button">
            <img src={arrow} alt="" className="sort-by__arrow" />
            <p className="select-button__text">Date by freshness</p>
          </button>
        </div>
        <div className="foot__selector filtres">
          <h2 className="selector__title">Filters:</h2>
          <button className="selector__select-button">
            <p className="select-button__text">Date</p>
          </button>
          <button className="selector__select-button">
            <p className="select-button__text">Tags</p>
          </button>
          <button className="selector__select-button">
            <p className="select-button__text">Duration</p>
          </button>
          <button className="selector__select-button">
            <p className="select-button__text">Rating</p>
          </button>
          <button className="selector__select-button">
            <p className="select-button__text">Language</p>
          </button>
          <button className="selector__select-button">
            <p className="select-button__text">Ads</p>
          </button>
        </div>
        <div className="foot__selector population">
          <h2 className="selector__title">Popular:</h2>
          <button className="selector__select-button">
            <p className="select-button__text">Popular1</p>
          </button>
          <button className="selector__select-button">
            <p className="select-button__text">Popular1</p>
          </button>
          <button className="selector__select-button">
            <p className="select-button__text">Popular1</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
