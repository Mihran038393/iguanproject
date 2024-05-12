import { IconBase } from 'react-icons';
import { BsClipboard2 } from 'react-icons/bs';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import { FaImages } from 'react-icons/fa';
import { BsChat } from 'react-icons/bs';
import './shortcuts.css';
import { Link } from 'react-router-dom';

export default function ShortCuts() {
    const shortCutsData = [
        { name: 'News Feed', link: '/', icon: <BsClipboard2 /> },
        { name: 'Friends', link: '/friends', icon: <LiaUserFriendsSolid /> },
        { name: 'Images', link: '/photos', icon: <FaImages /> },
        { name: 'Messages', link: '/messages', icon: <BsChat /> },
    ];

    return (
        <div className="collumnItem" id="sht">
            <div className="hContainer">
                <span>ShortCuts</span>
            </div>
            <ul className="dataList">
                {shortCutsData.map((item, index) => {
                    return (
                        <li className="shortCuts_item" key={index}>
                            <Link to={`${item.link}`}>
                                {item.icon}
                                <p>{item.name}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
