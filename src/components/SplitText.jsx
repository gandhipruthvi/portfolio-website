// src/components/SplitText.jsx
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const SplitText = ({
  text = "",
  className = "",
  delay = 30,
  initial = { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  threshold = 0.1,
  rootMargin = "-50px",
  textAlign = "left",
  onLetterAnimationComplete,
}) => {
  const words = text.split(" ").map((word) => word.split(""));
  const letters = words.flat();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
    margin: rootMargin,
  });

  // Track when all letters have animated
  const animatedCount = useRef(0);

  useEffect(() => {
    if (isInView && onLetterAnimationComplete) {
      const totalLetters = letters.length;
      animatedCount.current += 1;

      if (animatedCount.current === totalLetters) {
        onLetterAnimationComplete();
      }
    }
  }, [isInView, onLetterAnimationComplete, letters]);

  return (
    <div
      ref={ref}
      className={`split-parent ${className}`} // Apply the className here
      style={{
        textAlign,
        overflow: "visible",
        display: "inline",
        whiteSpace: "normal",
        wordWrap: "break-word",
      }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {word.map((letter, letterIndex) => {
            const index =
              words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) +
              letterIndex;
            return (
              <motion.span
                key={index}
                initial={initial}
                animate={isInView ? animate : {}}
                transition={{
                  ...transition,
                  delay: index * (delay / 1000), // Convert delay to seconds
                }}
                style={{
                  display: "inline-block",
                  willChange: "transform, opacity",
                }}
              >
                {letter}
              </motion.span>
            );
          })}
          <span style={{ display: "inline-block", width: "0.3em" }}>
            &nbsp;
          </span>
        </span>
      ))}
    </div>
  );
};

export default SplitText;
