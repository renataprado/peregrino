import styles from "../styles/password.module.css";
import { useState, useEffect } from "react";

const LetterBox = ({ letter, pressed }) => {
  const [discovered, setDiscovered] = useState(false);

  useEffect(() => {
    if (!discovered) setDiscovered(letter === pressed);
  }, [pressed]);

  return (
    <div className={styles.letterContainer}>{discovered ? letter : ""}</div>
  );
};

const PasswordPage = () => {
  const [pressed, setPressed] = useState("");
  const [pressedLetters, setPressedLetters] = useState([]);
  const [gameStatus, setGameStatus] = useState("started");

  const password = "teste";
  const passwordLetters = [...password];
  const passwordUniqueLetters = [...new Set(passwordLetters)];

  const handleKeyDown = ({ key }) => {
    const isLetter = /^[a-zA-Z]$/.test(key);
    if (isLetter) {
      setPressedLetters((prevPressedLetters) => {
        if (prevPressedLetters.includes(key)) {
          return prevPressedLetters;
        }
        setPressed(key);
        return [...prevPressedLetters, key];
      });
    }
  };

  const checkGameStatus = () => {
    let rights = 0;
    passwordUniqueLetters.forEach((v) => {
      if (pressedLetters.includes(v)) rights++;
    });

    if (rights === passwordUniqueLetters.length) {
      setGameStatus("Won!");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    checkGameStatus();
  }, [pressedLetters]);

  return (
    <div>
      <header>
        <h1>Enter password</h1>
      </header>
      <main>
        <div>{gameStatus}</div>
        <div className={styles.pressedLetters}>
          {pressedLetters.join(' ')}
        </div>
        <div className={styles.passwordBox}>
          {passwordLetters.map((l, i) => (
            <LetterBox letter={l} pressed={pressed} key={i} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PasswordPage;
