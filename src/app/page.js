'use client';

import {useState} from "react";
import styles from "./page.module.css";
import NextHome from "./pages/nextHome";
import { PinnedMap } from "./pages/pinnedMap";
export default function Home() {
  const [currentPage, setCurrentPage] = useState();


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* { currentPage === 'next' && <NextHome />}
        <button onClick={() => setCurrentPage('next')}>
          Next Home
        </button> */}
        <PinnedMap  className={styles.main} />
      </main>
    </div>
  );
}


//AIzaSyAXIDFceYnPXUyPs4xjT3Omh4Ws8X7hV3E