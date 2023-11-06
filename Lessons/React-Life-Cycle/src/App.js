// import logo from './logo.svg';
import "./App.css";
import axios from "axios"
import { useState, useEffect } from "react"; //array destructuring

function App() {
  const [color, setColor] =useState(null) //array destructuring
       //empty object  //The function that sets the color

  const fetchColor = async () => {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        const res = await axios.get(`http://www.thecolorapi.com/id?rgb=${r},${g},${b}`)
        setColor(res.data)

  }

  useEffect(() => {  //callback function
    fetchColor()
  }, []); //dependency array

  console.log("this is outside useEffect"); //Runs first

  return (
    <div className="App">
       <div>
        {color ? <img src={color.image.bare}/> : null}
        <button onClick={fetchColor}>Get New Color</button>
      </div>
    </div>
  );
}

export default App;
