import React, { useState } from "react";

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsCorrect(option === currentQuestion.answer);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div style={{ margin: "20px 0" }}>
      {currentQuestion ? (
        <div>
          <p>
            <strong>Question:</strong> {currentQuestion.question}
          </p>
          <div>
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                style={{
                  margin: "5px",
                  padding: "10px",
                  backgroundColor:
                    selectedOption === option ? "#ddd" : "#6495ED",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                }}
              >
                {option}
              </button>
            ))}
          </div>
          {isCorrect !== null && (
            <p style={{ color: isCorrect ? "green" : "red" }}>
              {isCorrect
                ? "Correct!"
                : `Incorrect. The correct answer is ${currentQuestion.answer}.`}
            </p>
          )}
          {currentQuestionIndex < questions.length - 1 && (
            <button
              onClick={handleNextQuestion}
              style={{
                marginTop: "10px",
                padding: "10px",
                backgroundColor: "#007B1F",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Next Question
            </button>
          )}
        </div>
      ) : (
        <p>Quiz complete! Great job!</p>
      )}
    </div>
  );
};

export default Quiz;
