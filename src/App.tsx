// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
    <h1>BMI Calculator</h1>
    <h3>Calculator</h3>
    <p>Enter the weight(in kg) and height(in cm) to get the BMI</p>
    <input id="weight" type="textbox" placeholder="Enter your weight(kg)"/>
    <br></br>
    <input id="height" type="textbox" placeholder="Enter your height(cm)"/>
    <br>
    </br>
    <button onClick="{calculator}">Calculate</button>
    <br></br><br></br>
    </div>
  )
}
function calculator(){
  let weight=document.getElementById("weight").value;
  let height=document.getElementById("height").value;
  let metreheight=height*0.01;
  let metresq=metreheight**2;
  let bmi=weight/metresq;
  alert("Your BMI is "+bmi);
}
export default App
