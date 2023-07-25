import { Link, useLocation } from "react-router-dom";

import { Navigation } from "./styles";

import { DeviceTabletSpeaker, Crosshair, Gear } from "@phosphor-icons/react";
import logo from "../../assets/logo.svg";

export function Nav() {
  const { pathname } = useLocation();

  function handleSelectedPathname(target: string) {
    return pathname === target ? "active" : "disable";
  }

  return (
    <Navigation>
      <img src={logo} alt="" />
      <ul>
        <li>
          <Link className={handleSelectedPathname("/home")} to="/home">
            <DeviceTabletSpeaker className="icon" size={20} weight="fill" />
            Home
          </Link>
        </li>
        <li>
          <Link className={handleSelectedPathname("/metas")} to="/metas">
            <Crosshair className="icon" size={20} />
            Metas
          </Link>
        </li>
        <li>
          <Link
            className={handleSelectedPathname("/grind-traker")}
            to="/grind-traker"
          >
            <Gear className="icon" size={20} weight="fill" />
            GrindTraker
          </Link>
        </li>
      </ul>
    </Navigation>
  );
}
