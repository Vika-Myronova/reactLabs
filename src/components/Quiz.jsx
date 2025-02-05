import React, { useEffect, useMemo } from "react";
import { useQuizStore } from "@/store/quizStore";
import styles from "@/styles/Quiz.module.css";
import { useCountryStore } from "@/store/countryStore";

const Quiz = ({}) => {
  const { selectedCountry } = useCountryStore();
  const {
    currentQuestionIndex,
    selectedOption,
    isCorrect,
    score,
    setSelectedOption,
    nextQuestion,
    resetQuiz,
  } = useQuizStore();

  const questions = useMemo(
    () => selectedCountry?.quizQuestions || [],
    [selectedCountry]
  );
  if (!questions.length) return <p>No quiz available for this country.</p>;

  useEffect(() => {
    resetQuiz();
  }, [resetQuiz]);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isQuizComplete = currentQuestionIndex >= questions.length;

  return (
    <div className={styles.quizContainer}>
      {isQuizComplete ? (
        <div>
          <p className={styles.questionText}>
            Quiz complete! 🎉 Your score = {score} / {questions.length}!
          </p>
          <button onClick={resetQuiz} className={styles.nextButton}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <p className={styles.questionText}>
            Question: {currentQuestion.question}
          </p>
          <div className={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() =>
                  setSelectedOption(option, currentQuestion.answer)
                }
                disabled={selectedOption !== null}
                className={`${styles.optionButton} ${
                  selectedOption === option
                    ? isCorrect
                      ? styles.correct
                      : styles.incorrect
                    : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          {isCorrect !== null && (
            <p className={isCorrect ? styles.correct : styles.incorrect}>
              {isCorrect
                ? "Correct! ✅"
                : `Incorrect ❌. The correct answer is ${currentQuestion.answer}.`}
            </p>
          )}
          <button
            onClick={nextQuestion}
            disabled={selectedOption === null}
            className={`${styles.nextButton} ${isLastQuestion ? styles.finish : ""}`}
          >
            {isLastQuestion ? "Finish Quiz" : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
