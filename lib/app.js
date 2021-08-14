import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "️🤦‍♂️": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "💖": "Love",
  "😑": "annoyance",
  "😮": "surprised",
  "🤫": "quiet",
  "🤢": "disgust",
  "🎉": "celebration"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    //processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    // console.log(meaning);

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    setMeaning(meaning); //React call to show output
  }

  function emojiClickHandler(emoji) {
    //processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); //React call to show output
  }

  return (
    <div className="App">
      <h1> Inside Outt </h1>
      <input
        placeholder="Put your emoji here to know what they mean"
        onChange={emojiInputHandler}
      ></input>

      <h2> {meaning} </h2>
      {/* Actual output set by React using useState */}

      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2.5rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}

      <footer className="footer">
        <hr></hr>
        <div className="footer-header">Find me on Social Media</div>

        <ul className="list-non-bullet">
          <li className="list-item-inline">
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="link footer-symbol"
              href="https://www.linkedin.com/in/kaustubh-manglurkar-871ba0167/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="list-item-inline">
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="link footer-symbol"
              href="https://github.com/KaustubhM1997?tab=repositories"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="list-item-inline">
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="link footer-symbol"
              href="https://twitter.com/KaustubhManglu1"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="list-item-inline">
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="link footer-symbol"
              href="https://dev.to/kaustubhmanglu1/create-your-first-cli-app-4c1p"
            >
              <i className="fab fa-dev"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

