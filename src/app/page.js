'use client';

import {useState} from "react";
import styles from "./page.module.css";
import NextHome from "./pages/nextHome";

export default function Home() {
  const [currentPage, setCurrentPage] = useState();


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        { currentPage === 'next' && <NextHome />}
        <button onClick={() => setCurrentPage('next')}>
          Next Home
        </button>
      </main>
    </div>
  );
}
