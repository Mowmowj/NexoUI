import React from 'react';
import Button,{ ButtonType, ButtonSize } from './components/Button/button';
import MenuItem from './components/Menu/menuItem';
import Menu from "./components/Menu/menu";

const App:React.FC=( )=> {
  return (
    <div className="App">
      <header className="App-header">
      <Menu defaultIndex={0} >
          <MenuItem index={0} disabled>
          home page
          </MenuItem>
          <MenuItem index={1}>
          about page
          </MenuItem>
          <MenuItem index={2}>
          other page
          </MenuItem>
          <li>
            hello
            </li>
      </Menu>
        <Button autoFocus>Normal </Button>
        <Button disabled>Disabled</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large  </Button>
        <Button btnType={ButtonType.Link} href="https://www.google.com">Google Link  </Button>
        <Button btnType={ButtonType.Link} href="" disabled> Disabled Link </Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>

        
      </header>
    </div>
  );
}

export default App;
