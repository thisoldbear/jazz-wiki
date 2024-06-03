"use client";
import { useState, useContext } from "react";
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
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

const NewPage = () => {
  const router = useRouter();
  const [post, setPost] = useState<Document>({
    title: "",
    html: "",
    id: "",
  });

  const { addDocument } = useLocalStorage();

  return (
    <>
      <Header>
        <Button
          label="Save"
          disabled={!post.html || !post.title}
          onClick={() => {
            const id = uuidv4();

            addDocument({
              ...post,
              id,
            });

            router.push(`/${id}`);
          }}
        />
      </Header>
      <div className={styles["new-page"]}>
        <div className={styles["new-page__column"]}>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="string"
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
              onChange={(html): void => {
                setPost((prevState: Document) => ({
                  ...prevState,
                  html,
                }));
              }}
            />
          </div>
        </div>
        <div className={styles["new-page__column"]}>
          {post?.title && <h1>{post.title}</h1>}
          <Preview html={post.html} />
        </div>
      </div>
    </>
  );
};

export default NewPage;
