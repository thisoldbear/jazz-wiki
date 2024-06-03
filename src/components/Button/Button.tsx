import { FC } from "react";

import styles from "./Button.module.css";
import Link from "next/link";

type ButtonProps = {
  label: string;
  disabled?: boolean;
  buttonStyle?: "success" | "danger";
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({
  label,
  buttonStyle = "success",
  ...rest
}) => {
  return (
    <button
      type="button"
      className={`${styles["button"]} ${styles[buttonStyle]}`}
      {...rest}
    >
      {label}
    </button>
  );
};

export const LinkButton: FC<ButtonProps & { href: string }> = ({
  label,
  ...rest
}) => {
  return (
    <Link className={styles["button"]} {...rest}>
      {label}
    </Link>
  );
};
