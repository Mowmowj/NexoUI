import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import '../../styles/index.scss'
import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'


// const styles: React.CSSProperties = {
//     // paddingTop:300,
//     textAlign: 'center'
// }
// const CenterDecorator = (storyFn: any)=><div style={styles}>{storyFn()}</div>
const horizontalMeau = () => (
  <Menu defaultIndex='' onSelect={(index)=>{action('clicked')}} defaultOpenSubMenus={['2']}>
    <MenuItem disabled>
          disabled page
          </MenuItem>
          <MenuItem >
          about page
          </MenuItem>
          <MenuItem >
          other page
          </MenuItem>
          <SubMenu title='MenuWithSub'>
            <MenuItem>
            submenu1
            </MenuItem>
            <MenuItem>
            submenu2
            </MenuItem>
            <MenuItem>
            submenu3
            </MenuItem>
            <MenuItem>
            submenu4
            </MenuItem>
          </SubMenu>
  </Menu>

)

const verticalMenu = () => (
  <Menu defaultIndex='1' onSelect={(index)=>{action('clicked')}} mode='vertical' defaultOpenSubMenus={['2']}>
    <MenuItem disabled>
          home page
          </MenuItem>
          <MenuItem >
          about page
          </MenuItem>
          <SubMenu title='MenuWithSub'>
            <MenuItem>
            submenu1
            </MenuItem>
            <MenuItem>
            submenu2
            </MenuItem>
            <MenuItem>
            submenu3
            </MenuItem>
            <MenuItem>
            submenu4
            </MenuItem>
          </SubMenu>
          <MenuItem >
          other page
          </MenuItem>
  </Menu>
)




storiesOf('Menu Component', module)

    // .addParameters({
    //     info: {
    //         inline: true 
    //     }
    // })  //添加说明
    // .addDecorator(withInfo)//展示源码按钮插件
    // .addDecorator(CenterDecorator)//调用css
    .add('Menu', horizontalMeau)    
    .add('Vertical Menu', verticalMenu)
 