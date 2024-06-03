"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import "quill/dist/quill.snow.css";

import { Document } from "@/types/types";
import { Preview } from "@/components/Preview/Preview";
import { Button } from "@/components/Button/Button";
import { Header } from "@/components/Header/Header";
import { useLocalStorage } from "@/hooks/useLocalStorage";

import styles from "./page.module.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const Edit = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { getDocument, updateDocument, deleteDocument } = useLocalStorage();

  const initialValues = getDocument(params.id);

  const [post, setPost] = useState<Document>({
    title: initialValues?.title || "",
    html: initialValues?.html || "",
    id: initialValues?.id || "",
  });

  return (
    <>
      <Header>
        <Button
          label="Delete"
          buttonStyle="danger"
          disabled={!post.html || !post.title}
          onClick={() => {
            deleteDocument(post.id);
            router.push(`/`);
          }}
        />
        <Button
          label="Save"
          disabled={!post.html || !post.title}
          onClick={() => {
            updateDocument(post);

            router.push(`/${post.id}`);
          }}
        />
      </Header>
      <div className={styles["edit-page"]}>
        <div className={styles["edit-page__column"]}>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="string"
            value={post.title}
            onChange={(e) => {
              setPost((prevState: Document) => ({
                ...prevState,
                title: e.target.value,
              }));
            }}
          />
          <label>Content</label>
          <div style={{ height: "500px" }}>
            <ReactQuill
              value={post.html}
              onChange={(html): void => {
                setPost((prevState: Document) => ({
                  ...prevState,
                  html,
                }));
              }}
            />
          </div>
        </div>
        <div className={styles["edit-page__column"]}>
          <h1>{post.title}</h1>
          <Preview html={post.html} />
        </div>
      </div>
    </>
  );
};

export default Edit;
