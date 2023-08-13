import { Link, useLocation } from "react-router-dom";

import { LogoutButton, Navigation } from "./styles";

import { DeviceTabletSpeaker, Crosshair, Gear, SignOut } from "@phosphor-icons/react";
import logo from "../../assets/logo.svg";
import { useMetaContext } from "../../hooks/useMetaContext";

export function Nav() {
  const { pathname } = useLocation();
  const { handleLogout } = useMetaContext();

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
          <Link className={handleSelectedPathname("/grind-traker")} to="/grind-traker">
            <Gear className="icon" size={20} weight="fill" />
            GrindTraker
          </Link>
        </li>
      </ul>
      <LogoutButton onClick={handleLogout}>
        <SignOut size={24} weight="fill" />
      </LogoutButton>
    </Navigation>
  );
}
