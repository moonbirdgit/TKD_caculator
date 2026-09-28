import React from "react";
import cx from "../../../utils/cx";
import styles from "./Button.module.scss";

/**
 * variant: "primary" | "secondary" | "ghost" | "danger"
 * size:    "sm" | "md" | "lg"
 */
export default function Button({
  variant = "secondary",
  size = "md",
  block = false,
  className,
  children,
  ...rest
}) {
  return (
    <button
      type="button"
      className={cx(
        styles.button,
        styles[variant],
        styles[size],
        block && styles.block,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function IconButton({ className, children, ...rest }) {
  return (
    <button
      type="button"
      className={cx(styles.button, styles.ghost, styles.icon, className)}
      {...rest}
    >
      {children}
    </button>
  );
}
