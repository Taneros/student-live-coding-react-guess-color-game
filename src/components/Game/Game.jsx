import {useState, useEffect} from "react";
const hexColors = ['#FF5733', '#3498DB', '#27AE60'];
const currentColor = '#FF5733';

const message = '0123456789ABCDEF'  //0 - 15

//#123456

function generateRandomColor () {
  let colorString = '#';
  for ( let i = 0; i < 6; i++ ) {
    // colorString += message[Math.floor( Math.random() * ( message.length - 1 ) - 0 ) - 0]; // 0 0.9
    const random = Math.floor( Math.random() * 16 )
    console.log( `Game/Game.jsx - line: 14 ->> random`, random )
    const symbol = message[random];
    console.log( `Game/Game.jsx - line: 16 ->> symbol`, symbol )
    colorString += symbol; // 0 0.9
    // console.log( `Game/Game.jsx - line: 14 ->> Math.ceil( Math.random() * 16 `, Math.ceil( Math.random() * 16 )  )

  }
  console.log( colorString );
  return colorString;
}


const Game = () => {
  const [currentColor, setCurrentColor] = useState( '' );
  const [hexColors, setHexColors] = useState( [] );
  const [message, setMessage] = useState( '' );

  // generateRandomColor()

  const generateColors = () => {
    const newColor = generateRandomColor();
    setCurrentColor( newColor );

    const newHexColors = Array.from( {length: 3}, () => generateRandomColor() );

    newHexColors[Math.floor( Math.random() * 3 )] = newColor;

    setHexColors( newHexColors );
  };

  useEffect( () => {
    generateColors();
  }, [] );

  const handleColorClick = ( color ) => {
    if ( color === currentColor ) {
      setMessage( "Вы угадали цвет!" );
    } else {
      setMessage( "Вы не угадали" );
    }
  }

  const handleNewButtonClick = () => {
    generateColors();
  }

  //TODO 
  /**
    *
    * states
    * 
    * currentColor
    * hexColors
    * messag
    * 
    * helper
    * 
    * generateColors
    * 
    * 
    * useEffect
    * 
    * states
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
      <button onClick={handleNewButtonClick}>New Game</button>
    </div> );
};

export default Game;
