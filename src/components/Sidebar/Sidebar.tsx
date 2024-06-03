"use client";
import { FC, PropsWithChildren, useSyncExternalStore } from "react";
import { LinkButton } from "../Button/Button";
import { DocumentsList } from "../DocumentsList/DocumentsList";

import styles from "./Sidebar.module.css";

const store = {
  getSnapshot: () => localStorage.getItem("documents"),
  subscribe: (listener: () => void) => {
    window.addEventListener("documentsUpdated", listener);

    return () => {
      window.removeEventListener("documentsUpdated", listener);
    };
  },
  getServerSnapshot: () => null,
};

export const Sidebar: FC<PropsWithChildren> = () => {
  const documents = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getServerSnapshot
  );

  const parsedDocuments = (documents && JSON.parse(documents || "")) || [];

  return (
    <aside className={styles["sidebar"]}>
      <div>
        <h1>Wiki</h1>
      </div>
      <div>
        {parsedDocuments.length > 0 && (
          <DocumentsList documents={parsedDocuments} />
        )}
      </div>
      <div>
        <LinkButton href="/new" label="Add a new document" />
      </div>
    </aside>
  );
};
