import React from "react";
import cx from "../../../utils/cx";
import styles from "./Card.module.scss";

export default function Card({ as: Tag = "div", className, children, ...rest }) {
  return (
    <Tag className={cx(styles.card, className)} {...rest}>
      {children}
    </Tag>
  );
}
