import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";

const App = () => {
  const [myNumber, setMyNumber] = useState(0);

  const input1 = useRef();
  const input2 = useRef();
  const getnumberbox = () => {
    console.log("Hello");
    console.log(input1.current);
    input1.current.style.backgroundColor= "red"
    input1.current.style.color= "black"
    // input1.current.style.display= "inline"
    // input2.current.style.display= "none"
    input2.current.style.backgroundColor= "orange"
  };
  const getConversion = () => {
    console.log("World !");
    console.log(input2.current);
    input2.current.style.backgroundColor= "black"
    // input1.current.style.display= "none"
    // input2.current.style.display= "inline"
    input1.current.style.backgroundColor= "orange"
  };
  return (
    <>
      <h1>Finally you find me</h1>
      <div>Hi i am here where are you searching</div>
      <input
        type="number"
        value={myNumber}
        ref={input1}
        onChange={(e) => setMyNumber(e.target.value)}
      />
      <input
        type="text"
        value={myNumber*82}
        ref={input2}
        onChange={(e) => setMyNumber(e.target.value)}
        placeholder="I am input2"
      />
      <h3>Value is : {myNumber*82}</h3>
      <button
        style={{marginRight:"50px", width :"7rem",height:"2rem"}}
        onClick={() => {
          getnumberbox();
        }}
      >
        Rupees
      </button>
      <button
         style={{width :"7rem",height:"2rem"}}
        onClick={() => {
          getConversion();
        }}
      >
        Dollar
      </button>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
