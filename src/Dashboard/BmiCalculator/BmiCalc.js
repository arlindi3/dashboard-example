import React from "react";
import "./BmiCalc.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function BmiCalc() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");

  let calcBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 10000;
      setBmi(bmi);
      setIsSubmit(true);
    }
  };

  let reload = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="app-BmiCalc">
        <div className="container">
          <h2 className="center">BMI Calculator</h2>
          <form onSubmit={calcBmi}>
            <div>
              <label>Weight (kg)</label>
              <input
                className="whinputs"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div>
              <label>Height (cm)</label>
              <input
                className="whinputs"
                value={height}
                onChange={(event) => setHeight(event.target.value)}
              />
            </div>

            <div>
              <button className="btn-submit" type="submit">
                Submit
              </button>
              <button
                className="btn btn-outline"
                onClick={reload}
                type="submit"
              >
                Reload
              </button>
            </div>
            {isSubmit ? <h1 className="bmi"> Your bmi is : {bmi}</h1> : false}
          </form>
        </div>
      </div>
    </>
  );
}

export default BmiCalc;
