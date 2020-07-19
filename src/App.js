import React from 'react';
import Palette from './Palette';
import seedPalettes from './seedPalettes';

function App() {
  return (
    <div>
      <Palette {...seedPalettes[4]} />
    </div>
  );
}

export default App;
