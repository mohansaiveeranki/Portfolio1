import { useState, useEffect, memo } from "react";
import "./TypeWriter.css";

const Typewriter = ({ texts, speed = 200, delay = 2000 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex(charIndex - 1), speed / 2);
      } else {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    } else {
      if (charIndex < currentText.length) {
        setTimeout(() => setCharIndex(charIndex + 1), speed);
      } else {
        setTimeout(() => setIsDeleting(true), delay);
      }
    }

    setDisplayedText(currentText.substring(0, charIndex));
  }, [charIndex, isDeleting, textIndex, texts, speed, delay]);

  return (
    <h1 class="heading">
      { displayedText }
      <span class="cursor">|</span>
    </h1>
  );
};

export default memo(Typewriter);
