import { useState } from "react";
import logo from "../src/assets/logo.svg";

export default function App() {
  function convertBinToDec(event) {
    event.preventDefault();
    let arrayNumbers = valueInput.split("");
    let aux = arrayNumbers.length - 1;
    let decimal = 0;
    for (let i = 0; arrayNumbers.length > i; i++) {
      decimal += Number(arrayNumbers[i]) * 2 ** aux;
      aux--;
    }
    setValueOutput(decimal);
  }

  const [valueInput, setValueInput] = useState();
  const [valueOutput, setValueOutput] = useState();

  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <form onSubmit={convertBinToDec}>
        <input
          value={valueInput}
          onChange={(event) => setValueInput(event.target.value)}
        />
        <input value={valueOutput} />
        <p>{valueOutput}</p>
        <button type="submit">Convert</button>
      </form>
    </div>
  );
}
