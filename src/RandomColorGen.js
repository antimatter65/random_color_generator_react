import './App.css';
import './index.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function RandomColorGen() {
  // const [color1, setColor1] = useState('');
  const [genColor, setGenColor] = useState('');
  return (
    <div>
      <h2 className="myCssDiv2">
        Click to Randomly Generate A Color:
        <br />
        <button onClick={() => setGenColor(randomColor())}>Generate</button>
      </h2>
      <br />
      <h3
        style={{
          backgroundColor: genColor,
        }}
        className="myCssDiv4"
      >
        Randomly Generated Color:
        <br />
        Hex value: {genColor}
      </h3>
    </div>
  );
}
