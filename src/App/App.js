import React from 'react';
import './App.css';
import Button from './components/Button/Button'

function App() {
  return (
    <div className="App">
      <Button text="OK" onButtonClicked={(arg) => alert('Click sur bouton')} />
      <Button text="cancel" onButtonClicked={(arg) => alert('Le user a osé cliquer !')} />
      <Button text="User ne clique pas ICI" />
      <Button text="je sais que tu vas quand meme cliquer !" />
    </div>
  );
}

export default App;
