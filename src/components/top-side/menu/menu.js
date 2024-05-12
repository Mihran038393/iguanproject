import './menu.css';
import { Link } from 'react-router-dom';
import { menuItems } from '../../../store/navbar-menu-details';
export default function Menu() {
    return (
        <ul className="homeMenu">
            {menuItems.map((item, index) => {
                return (
                    <li key={index} className="homeMenu-li">
                        <Link className="menu_item" to={`${item.link}`}>
                            {item.name} ⌵
                        </Link>
                        <ul className="submenu">
                            {item.submenu.map((item, index) => {
                                return (
                                    <Link to={`${item.link}`}>
                                        <li key={index}>
                                            <p className="submenu_item">
                                                {item.name}
                                            </p>
                                        </li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </li>
                );
            })}
        </ul>
    );
}
