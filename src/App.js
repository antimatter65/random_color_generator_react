import './App.css';
import './RandomColorGen.js';
import './index.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import RandomColorGen from './RandomColorGen';

export default function ManuallySetHue() {
  const [inputColorName, setInputColorName] = useState('green');
  const [genLum, setGenLum] = useState('dark');
  randomColor();

  return (
    <div>
      <h2 className="myCssDiv2">
        Enter A Color Name (hue):
        <br />
        <input
          type="inputColorName"
          value={inputColorName}
          onChange={(event) => {
            const outputColor = event.currentTarget.value;

            /*             setInputColorName(event.currentTarget.value);
            const newState = 'Updated Title'; */

            setInputColorName(outputColor); // Asynchronous
          }}
        />
        <br />
      </h2>
      <br />
      <h2 className="myCssDiv">
        Enter a Luminosity (dark or light):
        <br />
        <input
          type="genLum"
          value={genLum}
          onChange={(event) => {
            setGenLum(event.currentTarget.value);
          }}
        />
        <br />
        <br />
      </h2>
      <h1
        className="myCssDiv3"
        style={{
          backgroundColor: randomColor({
            luminosity: genLum,
            hue: inputColorName,
          }),
        }}
      >
        Color Entered: {inputColorName}
        <br />
        Hex value: {inputColorName}
        <br />
        Luminosity: {genLum}
      </h1>
      <br />
      <RandomColorGen />
    </div>
  );
}
