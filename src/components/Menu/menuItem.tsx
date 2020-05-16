import React ,{ useContext }from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'

export interface MenuItemsProps{
    index: number;
    disabled?:  boolean;
    className?: string; 
    style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemsProps>=(props)=>{
    const{index,disabled,className,style,children}=props
    const context = useContext(MenuContext)
    const classes = classNames('menu-item',className,{
        'is-disabled':  disabled,
        'is-active':  context.index===index
    })
    const handleClick = () => {
        if (context.onSelect && !disabled) {
            context.onSelect(index)
        }
    }
    return (
       
        <li className={classes} onClick={handleClick}>
            {children}
        </li>

    )
}
MenuItem.displayName = 'MenuItem'
export default MenuItem