import { useState } from "react";

import Button from "./button";

import "./ImcCalc.css";

const ImcCalc = ({calcImc}) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setWeight("");
    setHeight("");
  };

  const validDigts = (text) => {
    return text.replace(/[^0-9,]/g, "")
  }

  const handleHeightChange = (e) => {
    const updatedValue = validDigts(e.target.value);
    setHeight(updatedValue);
  }

  const handleWeightChange = (e) => {
    const updatedValue = validDigts(e.target.value)
    setWeight(updatedValue);
  }

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura: </label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo 1,75"
              onChange={(e) => handleHeightChange(e)}
              value={height}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso: </label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo 55,0"
              onChange={(e) => handleWeightChange(e)}
              value={weight}
            />
          </div>
        </div>
        <div className="action-control">
          <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)} />
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
