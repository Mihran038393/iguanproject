import '../../assets/styles/main.css';
import logo from '../../assets/images/winku_logo.png';
import Menu from './menu/menu';
import userIcon from '../../assets/images/user_image.jpg';
import { FiMenu } from 'react-icons/fi';
import { IoHomeOutline, IoSearchOutline } from 'react-icons/io5';
import { BsChat } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { signedInUser } from '../../store/users-details';
import { useState } from 'react';

export default function Topbar() {
    const [user, setUser] = useState(signedInUser);

    const handleStatus = (status) => {
        setUser({
            ...signedInUser,
            status: status,
        });
    };

    return (
        <header className="topbar">
            <div className="logo">
                <Link title="" to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <Menu />
            <div className="settingsBar">
                <IoSearchOutline className="icon" />

                <Link to="/">
                    <IoHomeOutline className="icon" />
                </Link>
                <Link to="messages">
                    <BsChat className="icon" />
                </Link>
            </div>
            <div className="userNav">
                <img src={userIcon}></img>
                <span className={`status ${user.status}`}></span>
                <ul className="userSettings">
                    <li onClick={() => handleStatus('online')}>Online</li>
                    <li onClick={() => handleStatus('away')}>Away</li>
                    <li onClick={() => handleStatus('offline')}>Offline</li>
                    <li>
                        <Link to="/login">Log Out</Link>
                    </li>
                </ul>
            </div>
            <FiMenu className="menuIcon" />
        </header>
    );
}
