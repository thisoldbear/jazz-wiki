"use client";
import { Document } from "@/types/types";
import { FC, useState } from "react";
import Link from "next/link";

type DocumentListProps = {
  documents: Document[];
};

export const DocumentsList: FC<DocumentListProps> = ({ documents }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      {documents.length > 1 && (
        <input
          placeholder="Search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      )}
      <ul>
        {documents
          .filter((post) => {
            if (
              searchTerm &&
              post.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            ) {
              return post;
            } else if (!searchTerm) {
              return post;
            }
          })
          .map((post: Document) => {
            return (
              <li key={post.id}>
                <Link href={`/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};
