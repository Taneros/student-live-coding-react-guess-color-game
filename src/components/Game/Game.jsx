import React from 'react';
import {useState, useEffect} from "react";
const hexColors = ['#FF5733', '#3498DB', '#27AE60'];
const currentColor = '#FF5733';

const hexList = '0123456789ABCDEF'  //0 - 15

const message = 'Вы угадали цвет! / Вы не угадали цвет!'


function generateRandomColor () {
  let colorString = '#';
  
  
  return colorString;
}


const Game = () => {

  useEffect( () => {
  }, [] );

  const handleColorClick = ( color ) => {

  }

  const handleNewGameButtonClick = () => {

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
        {hexColors.map( ( color, index ) => (
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
