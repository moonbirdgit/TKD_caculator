import React from "react";
import { IconButton } from "../../ui/Button/Button";
import { InfoIcon } from "../../ui/Icons";
import styles from "./Header.module.scss";

const APP_NAME = "跆拳道品勢計算機";

// title 有值時（分頁模式）顯示目前頁面名稱，否則顯示 App 名稱
export default function Header({ title, onInfoClick }) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <img
          className={styles.logo}
          src={`${process.env.PUBLIC_URL}/karate.svg`}
          alt=""
          width="32"
          height="32"
        />
        <div className={styles.titles}>
          {title ? (
            <>
              <p className={styles.eyebrow}>{APP_NAME}</p>
              <h1 className={styles.title}>{title}</h1>
            </>
          ) : (
            <h1 className={styles.title}>{APP_NAME}</h1>
          )}
        </div>
        <IconButton aria-label="使用說明" onClick={onInfoClick}>
          <InfoIcon />
        </IconButton>
      </div>
    </header>
  );
}
