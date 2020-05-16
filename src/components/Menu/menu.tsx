import React ,{ useState,createContext} from 'react'
import {MenuItemsProps} from './menuItem'
import classNames from 'classnames'

//模板字符串
type MenuMode = 'horizontal'|'vertical'  //纵向横向
type SelectCallback = (selectIndex: number) => void //用户自定义的callback


export interface IMenuContext {//规定context传给item的东西 
    index:  number;
    onSelect?:  SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({index:0})//传递给子组件默认选择项

export interface MenuProps{
    mode?:  MenuMode;
    defaultIndex?: number;  //default submenu
    classname?: string;
    style?: React.CSSProperties;
    onSelect?: (selectIndex: number) => void;
}

const Menu: React.FC<MenuProps>=(props)=>{
    const {classname,mode,style,children,defaultIndex,onSelect}=props;
    const [currentActive,setActive] = useState(defaultIndex) //记录子组件谁active了
    const classes = classNames('nexo-menu',classNames,{
        'menu-vertical': mode==="vertical"
    })
    const handleClick = (index: number)=>{
        setActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }
    const passedContext: IMenuContext ={//告诉子组件高亮哪个
        index: currentActive?currentActive:0,
        onSelect: handleClick,
    }
    const renderChildren=()=>{
        return React.Children.map(children,(child,index)=>{
            const childElement = child as React.FunctionComponentElement<MenuItemsProps>
            const{ displayName }=childElement.type
            if (displayName==='MenuItem') {
                return childElement
            }else{
                console.error( "Waring:Meun has a child whose name not MenuItem" )
            }
        })
    }
    return(
        <ul className={classes} style={style} data-testid="test-menu">
            <MenuContext.Provider value={passedContext}>
            {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps={
    defaultIndex : 0,
    mode : 'horizontal',
}

export default Menu