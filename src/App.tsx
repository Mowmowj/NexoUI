import React from 'react';
import Button,{ ButtonType, ButtonSize } from './components/Button/button';

const App:React.FC=( )=> {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Normal Vamonos</Button>
        <Button disabled>Disabled Vamonos</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Vamonos </Button>
        <Button btnType={ButtonType.Link} href="https://www.google.com"> Link Vamonos </Button>
        <Button btnType={ButtonType.Link} href="https://www.google.com" disabled> Disabled Link Vamonos </Button>
      </header>
    </div>
  );
}

export default App;
