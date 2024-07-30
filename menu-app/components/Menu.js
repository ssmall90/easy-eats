"use client";

import MenuItem from "./MenuItem";

const Menu = ({ currentMenuData, isOpen, handleToggleMenu  }) => {
  const restaurantName =
    currentMenuData.length > 0 ? currentMenuData[0].name : "";
  const restaurantImage =
    currentMenuData.length > 0 ? currentMenuData[0].img : "";
  const restaurantCountry =
    currentMenuData.length > 0 ? currentMenuData[0].country : "";

  return (
    <div className={`menu-box ${isOpen ? 'open' : ''}`}>

        <button className="close-btn" onClick={handleToggleMenu}>
            X
        </button>

      <div className="restaurant-info-box">
        <div className="restaurant-image">

          <img src={restaurantImage} />
        </div>

        <div className="restaurant-title">
          <h2>{restaurantName}</h2>
          <span>{restaurantCountry}</span>
        </div>
      </div>

      <div className="menu-container">
        {currentMenuData && currentMenuData.length > 0 ? (
          currentMenuData.map((item) => <MenuItem item={item}></MenuItem>)
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Menu;