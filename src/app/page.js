'use client';

import {useState} from "react";
import styles from "./page.module.css";
import NextHome from "./pages/nextHome";
import { PinnedMap } from "./pages/pinnedMap";
import PasswordPage from "./pages/PasswordPage";
export default function Home() {
  const [currentPage, setCurrentPage] = useState();


  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <main style={{display: "flex", "justify-content": "center"}}>
        {/* { currentPage === 'next' && <NextHome />}
        <button onClick={() => setCurrentPage('next')}>
          Next Home
        </button> */}
        {/* <PinnedMap /> */}
        <PasswordPage />
      </main>
    </div>
  );
}5


//AIzaSyAXIDFceYnPXUyPs4xjT3Omh4Ws8X7hV3E