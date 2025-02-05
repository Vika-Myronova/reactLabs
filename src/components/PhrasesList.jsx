import React from "react";

const PhrasesList = ({ phrases }) => {
  return (
    <>
      <h3>Common Phrases</h3>
      <ul>
        {phrases.map((phrase, index) => (
          <li key={index}>
            <span>{phrase.phrase}</span> - <span>{phrase.translation}</span> (
            <span>
              <i>{phrase.pronunciation}</i>i
            </span>
            )
          </li>
        ))}
      </ul>
    </>
  );
};

export default PhrasesList;
