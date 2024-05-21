import { useState, useRef } from 'react';
import { friendsData } from '../../../store/friends-details';
import './friends.css';

export default function Friends() {
    const [friends, setFriends] = useState(friendsData);
    const timeoutRef = useRef(0);

    const handleSearch = (e) => {
        const value = e.target.value;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            const filteredFriends = friendsData.filter((friend) => {
                return (
                    friend.name.toLowerCase().includes(value.toLowerCase()) ||
                    friend.surname.toLowerCase().includes(value.toLowerCase())
                );
            });
            setFriends(filteredFriends);
        }, 1000);
    };

    return (
        <div className="collumnItem" id="fr">
            <div className="hContainer">
                <span>Friends</span>
            </div>
            <input
                className="friendSearch"
                type="text"
                placeholder="Search Contacts..."
                onChange={handleSearch}
            ></input>
            <ul className="friendsUl">
                {friends.map((item, index) => {
                    return (
                        <li className="friendsList" key={index}>
                            <div className="frlstIcon">
                                <a to={`#`}>
                                    <img src={item.iPath}></img>
                                </a>
                                <span
                                    className={`status ${item.status}`}
                                ></span>
                            </div>
                            <div className="friendsMeta">
                                <h5>
                                    {item.name + ' '}
                                    {item.surname}
                                </h5>

                                <p>{item.email}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
