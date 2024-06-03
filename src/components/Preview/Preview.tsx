import { FC } from "react";
import styles from "./Preview.module.css";

type PreviewProps = {
  html: string | TrustedHTML;
};

export const Preview: FC<PreviewProps> = ({ html }) => {
  return (
    <div
      className={styles["preview"]}
      dangerouslySetInnerHTML={{
        __html:
          html ||
          `<p class="${styles["placeholder"]}">Preview will appear here...</p>`,
      }}
    />
  );
};
