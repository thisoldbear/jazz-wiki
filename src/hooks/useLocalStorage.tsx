"use client";
import { Document } from "@/types/types";

export const useLocalStorage = () => {
  const getAndParseDocuments = (): Document[] | [] => {
    if (typeof localStorage !== "undefined") {
      return JSON.parse(localStorage.getItem("documents") || "");
    }

    return [];
  };

  const getDocument = (id: string) => {
    if (typeof localStorage !== "undefined") {
      const documents = getAndParseDocuments();

      return documents.find((post) => post.id === id);
    }
  };

  const addDocument = (post: Document) => {
    if (typeof localStorage !== "undefined") {
      const documents = getAndParseDocuments();

      localStorage.setItem("documents", JSON.stringify([post, ...documents]));

      window.dispatchEvent(new StorageEvent("documentsUpdated"));
    }
  };

  const updateDocument = (post: Document) => {
    if (typeof localStorage !== "undefined") {
      const documents = getAndParseDocuments();

      localStorage.setItem(
        "documents",
        JSON.stringify([post, ...documents.filter((p) => p.id !== post.id)])
      );

      window.dispatchEvent(new StorageEvent("documentsUpdated"));
    }
  };

  const deleteDocument = (id: string) => {
    if (typeof localStorage !== "undefined") {
      const documents = getAndParseDocuments();

      localStorage.setItem(
        "documents",
        JSON.stringify([...documents.filter((document) => document.id !== id)])
      );

      window.dispatchEvent(new StorageEvent("documentsUpdated"));
    }
  };

  return {
    addDocument,
    getDocument,
    updateDocument,
    deleteDocument,
  };
};
