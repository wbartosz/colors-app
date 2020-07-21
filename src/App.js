import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';

function App() {
  console.log(generatePalette(seedPalettes[4]))
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette list goes here</h1>} />
      <Route exact path="/palette/:id" render={() => <h1>Individual Palette</h1>}/>
    </Switch>

    // <div>
    //   <Palette palette={generatePalette(seedPalettes[4])} />
    // </div>
  );
}

export default App;
