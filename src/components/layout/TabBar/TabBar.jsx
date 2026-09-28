import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../constants/layout";
import { ROUTE_ICONS } from "../../ui/Icons";
import cx from "../../../utils/cx";
import styles from "./TabBar.module.scss";

export default function TabBar() {
  return (
    <nav className={styles.tabbar} aria-label="頁面切換">
      <div className={styles.inner}>
        {ROUTES.map((route) => {
          const RouteIcon = ROUTE_ICONS[route.icon];
          return (
            <NavLink
              key={route.path}
              to={route.path}
              end
              className={({ isActive }) =>
                cx(styles.tab, isActive && styles.active)
              }
            >
              <span className={styles.iconWrap}>
                <RouteIcon size={20} />
              </span>
              <span className={styles.label}>{route.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
