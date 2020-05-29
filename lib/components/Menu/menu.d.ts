import React, { FC, CSSProperties } from 'react';
declare type MenuMode = 'horizontal' | 'vertical';
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
export declare const MenuContext: React.Context<IMenuContext>;
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
export declare const Menu: FC<MenuProps>;
export default Menu;
