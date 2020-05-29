import Menu from './menu';
import SubMenu from './subMenu';
import MenuItem from './menuItem';
var MenuHub = Menu;
MenuHub.Item = MenuItem;
MenuHub.SubMenu = SubMenu;
export default MenuHub;
