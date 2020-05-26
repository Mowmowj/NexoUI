import React, { FC, useState, createContext, CSSProperties } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'
export interface MenuProps {
  /**默认选中态的菜单索引值 */
  defaultIndex?: string;
  className?: string;
  /**菜单方向：水平或垂直 */
  mode?: MenuMode;
  style?: CSSProperties;
  /**点击触发的回调函数 */
  onSelect?: (selectedIndex: string) => void;
  /**设置子菜单的默认打开索引值 只在垂直模式下生效 */
  defaultOpenSubMenus?: string[];
}
interface IMenuContext {
  index: string;
  onSelect?: (selectedIndex: string) => void;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];  
}

export const MenuContext = createContext<IMenuContext>({index: '0'})
/** 
 * 
 *  The menu of Nexo component library can realize:
 *+ Menu direction
 *+ Disable menu
 *+ Default active state
 *+ Open submenu by default
 *+ Trigger menu events

 Nexo组件库的菜单，可以实现:
 *+ 菜单方向
 *+ 禁用菜单
 *+ 默认激活态
 *+ 默认打开子菜单
 *+ 触发菜单事件
 *+ hover弹射子菜单
 */
export const Menu: FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect, defaultOpenSubMenus } = props
  const [ currentActive, setActive ] = useState(defaultIndex)
  const classes = classNames('nexo-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })
  const handleClick = (index: string) => {
    setActive(index)
    if(onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      } else {
        console.error("Warning: Menu has a child which is not a MenuItem component")
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: [],
}

export default Menu;