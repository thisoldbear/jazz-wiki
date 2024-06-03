"use client";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header/Header";
import { LinkButton } from "@/components/Button/Button";
import { Preview } from "@/components/Preview/Preview";
import { useLocalStorage } from "@/hooks/useLocalStorage";

import styles from "./page.module.css";

const Page = ({ params: { id } }: { params: { id: string } }) => {
  const { getDocument } = useLocalStorage();

  const post = getDocument(id);

  if (!post?.id) {
    return notFound();
  }

  return (
    <>
      <Header>
        <LinkButton label="Edit" href={`/${post.id}/edit`} />
      </Header>
      <div className={styles["page"]}>
        <h1>{post.title}</h1>
        {post && <Preview html={post.html} />}
      </div>
    </>
  );
};

export default Page;
