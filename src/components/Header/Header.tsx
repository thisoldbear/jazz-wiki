import { FC, PropsWithChildren } from "react";

import styles from "./Header.module.css";

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return <header className={styles["header"]}>{children}</header>;
};
