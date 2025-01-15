import React from "react";

const PhrasesList = ({ phrases }) => {
  return (
    <div>
      <h3>Common Phrases</h3>
      <ul>
        {phrases.map((phrase, index) => (
          <li key={index}>
            <span>{phrase.text}</span> - <span>{phrase.translation}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhrasesList;
