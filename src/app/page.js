"use client";

import { useState } from "react";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import PasswordPage from "./pages/PasswordPage";
export default function Home() {
  const [currentPage, setCurrentPage] = useState();

  return (
    <PrimeReactProvider>
      <div style={{ height: "100vh", width: "100vw" }}>
        <main style={{ display: "flex", "justify-content": "center" }}>
          {/* { currentPage === 'next' && <NextHome />}
        <button onClick={() => setCurrentPage('next')}>
          Next Home
        </button> */}
          {/* <PinnedMap /> */}
          <PasswordPage />
        </main>
      </div>
    </PrimeReactProvider>
  );
}

//AIzaSyAXIDFceYnPXUyPs4xjT3Omh4Ws8X7hV3E
