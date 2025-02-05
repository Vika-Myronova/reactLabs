import React from "react";

const Question = ({ question, onAnswer }) => {
  return (
    <div>
      <h4>{question.text}</h4>
      <div>
        {question.options.map((option, index) => (
          <button key={index} onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
