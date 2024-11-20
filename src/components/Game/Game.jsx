import React from 'react';
import {useState, useEffect} from "react";
const hexColors = ['#FF5733', '#3498DB', '#27AE60'];
const currentColor = '#FF5733';

const hexList = '0123456789ABCDEF'  //0 - 15

const message = 'Вы угадали цвет! / Вы не угадали цвет!'

function generateRandomColor () {
  let colorString = '#';
  
  for ( let i = 0; i < 6; i++ ){
    
    const index = Math.floor( Math.random() * 16 );
    const symbol = hexList[index]; 
     
    colorString += symbol
  }
  console.log(colorString);
  
  return colorString;
}

function generateColorArray () {
  let colorArray = [];
  
  for ( let i = 0; i < 3; i++ ) {
      const color = generateRandomColor();
      colorArray.push( color );
  }
  
  return colorArray;
}


const Game = () => {

  const colorArray = generateColorArray();

  const [currentColor, setCurrentColor] = useState(colorArray[Math.floor(Math.random() * 3)]);
  const [hexColor, setHexColor] = useState(colorArray);
  const [message, setMessage] = useState( '' );
  
  const successMessage = "You choose right color!";
  const failMessage = "You choose wrong color!";

  console.log( 'currentColor', currentColor );
  console.log(`Game/Game.jsx - line: 53 ->> hexColor`, hexColor)

  useEffect( () => {
  }, [] );

  const handleColorClick = ( color ) => {
    if (currentColor === color) {
      setMessage(successMessage);
    } else {
      setMessage(failMessage);
    }
  }

  const handleNewGameButtonClick = () => {
    const colorArray = generateColorArray();
    setCurrentColor(colorArray[Math.floor(Math.random() * 3)]);
    setHexColor(colorArray);
    setMessage('');
  }

  //TODO 
  /**
    *
    * 1) states
    * 
    * currentColor
    * hexColors
    * message   "Вы угадали цвет!" : 
    * 
    * 2) helper generateColors
    * 
    * 3) useEffect
    * 
    * 
    * 
    **/

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Guess the Color</h1>
      <div style={{width: 300, height: 200, backgroundColor: currentColor, margin: '0 auto', marginBottom: 20}} />
      <div>
        {hexColor.map( ( color, index ) => (
          <div
            key={index}
            style={{
              display: 'inline-block',
              width: 100,
              height: 100,
              margin: 10,
              cursor: 'pointer',
              border: '1px solid black',
              padding: 5,
            }}
            onClick={() => handleColorClick( color )}
          >
            {color}
          </div>
        ) )}
      </div>
      <p>{message}</p>
      <button onClick={handleNewGameButtonClick}>New Game</button>
    </div> );
};

export default Game;
