import React from 'react';
import Button,{ ButtonType, ButtonSize } from './components/Button/button';
import MenuItem from './components/Menu/menuItem'
import Menu from "./components/Menu/menu"
import SubMenu from "./components/Menu/subMenu"
import Icon from './components/Icon/icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const App:  React.FC=()=> {
  return (
    <div className="App">
      <header className="App-header">
      <Icon icon="coffee" theme='primary' size='10x'/>
      <Icon icon='arrow-down' theme='danger' size='10x'/>
      <Menu defaultIndex='0' onSelect={(index)=>{alert(index)}} mode='vertical' defaultOpenSubMenus={['2']}>
          <MenuItem disabled>
          home page
          </MenuItem>
          <MenuItem >
          about page
          </MenuItem>
          <SubMenu title='MenuWithSubMenu'>
            <MenuItem>
            submenu
            </MenuItem>
            <MenuItem>
            submenu
            </MenuItem>
          </SubMenu>
          
          <MenuItem >
          other page
          </MenuItem>
          <SubMenu title='MenuWithSubMenu2'>
            <MenuItem>
            submenu
            </MenuItem>
            <MenuItem>
            submenu
            </MenuItem>
            <MenuItem>
            submenu
            </MenuItem>
            <MenuItem>
            submenu
            </MenuItem>
          </SubMenu>

      </Menu>


      </header>
    </div>
  );
}

export default App;
