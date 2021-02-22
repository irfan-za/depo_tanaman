import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faSeedling,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { stack as Menu } from "react-burger-menu";

function Sidebar() {
  console.log({ Menu });
  return (
    <Menu right>
      <a className="menu-item" href="#home">
        <span>
          <FontAwesomeIcon className=" mr-1" icon={faHome} />
        </span>
        Home
      </a>
      <a className="menu-item" href="#about">
        <span>
          <FontAwesomeIcon className=" mr-1" icon={faInfoCircle} />
        </span>
        About
      </a>
      <a className="menu-item" href="#bibit">
        <span>
          <FontAwesomeIcon className=" mr-1" icon={faSeedling} />
        </span>
        Bibit
      </a>
      <a className="menu-item" href="#kontak">
        <span>
          <FontAwesomeIcon className=" mr-1" icon={faPhoneAlt} />
        </span>
        Kontak
      </a>
    </Menu>
  );
}

export default Sidebar;
