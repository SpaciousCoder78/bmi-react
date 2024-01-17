
import './App.css';

function App() {
  

  return (
    <div>
      <h1>BMI Calculator</h1>
      <h3>Calculator</h3>
      <p>Enter the weight (in kg) and height (in cm) to get the BMI</p>
      <input id="weight" type="textbox" placeholder="Enter your weight (kg)" />
      <br />
      <input id="height" type="textbox" placeholder="Enter your height (cm)" />
      <br />
      <button onClick={calculator}>Calculate</button>
      <br /><br />
    </div>
  );
}

function calculator() {
  const weight = document.getElementById("weight") as HTMLInputElement;
  const height = document.getElementById("height") as HTMLInputElement;
  const wt = parseFloat(weight?.value || "0");
  const hei = parseFloat(height?.value || "0");
  const metreheight = hei * 0.01;
  const metresq = metreheight ** 2;
  const bmi = wt / metresq;
  alert("Your BMI is " + bmi);
}

export default App;
