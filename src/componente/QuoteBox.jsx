import React, { useState } from "react";
import quotes from "../quotes.json";
import LastOne from "./LastOne";

const QuoteBox = () => {
  let numRandom = Math.floor(Math.random() * quotes.length);
  const [number, setNumber] = useState(numRandom);

  const increment = () => {
    const segundRandom = Math.floor(Math.random() * quotes.length);
    setNumber(segundRandom);
  };

  const colors = [
    "#61764B",
    "#432C7A",
    "#8EC3B0",
    "#d65db1",
    "#845ec2",
    "#404258",
    "#ff6f91",
    "#f9f871",
    "#00c9a7",
    "#845ec2",
    "#4ffbdf",
    "#c031b5",
    "#82CD47",
  ];
  const colorRandom = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[colorRandom]}`;

  return (
      <div className="">
    <div
      className="card" style={{color: colors[colorRandom],}}>
        <h1> '' </h1>
        <h2>
          <i className="fa-solid fa-quote-left"></i> {quotes[number].quote}
        </h2>
        <ul>
          <li>{quotes[number].author}</li>
        </ul>
        <div>
          <LastOne
            colors={colors}
            colorRandom={colorRandom}
            sStyles={document.body.style}
            number={number}
            increment={increment}
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
