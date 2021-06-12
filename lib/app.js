import React, { useState } from "react";
import "./styles.css";


var emojiDictionary = {
  "😊": "smiling",
  "️🤦‍♂️": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "💖": "Love",
  "😑": "annoyance"
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

    setMeaning(meaning); //React cal to show output
  }

  function emojiClickHandler(emoji) {
    //processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); //React cal to show output
  }

  return (
    <div className="App">
      <h1> Inside Outt! </h1>
      <input placeholder = "Put your emoji here to know what it means"   onChange={emojiInputHandler}></input>

      <h2> {meaning} </h2>
      {/* Actual output set by React using useState */}

      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
