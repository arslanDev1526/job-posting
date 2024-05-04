import React from "react";
import { Hamburger } from "../../assets/svgs/hamburger.jsx";
import { Menu } from "../../assets/svgs/menu.jsx";

const CardsChagerBtn = () => {
  return (
    <>
      <div className="flex gap-4">
        <button>
          <Hamburger />
        </button>
        <button>
          <Menu />
        </button>
      </div>
    </>
  );
};

export default CardsChagerBtn;
