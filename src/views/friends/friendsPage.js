import { useState } from 'react';
import { friendsData } from '../../store/friends-details';
import './friendsPage.css';
import { FriendReq } from '../../store/friend-requests-details';

export default function Friends() {
    const [friends, setFriends] = useState(friendsData);
    const [tab, setTab] = useState('add');
    const [buttons, setButtons] = useState({
        reject: 'Unfriend',
        accept: 'Add Friends',
    });

    const handleFriends = (e) => {
        const value = e.target.name;
        setTab(value);
        if (value === 'add') {
            setFriends(friendsData);
            setButtons({
                reject: 'Unfriend',
                accept: 'Add Friends',
            });
        } else {
            setFriends(FriendReq);
            setButtons({
                reject: 'Delete Request',
                accept: 'Confirm',
            });
        }
    };

    return (
        <div className="collumnItem">
            <div className="frNav">
                <div className="myFriends">
                    <a
                        onClick={(e) => handleFriends(e)}
                        name="add"
                        className={tab === 'add' ? 'active' : ''}
                    >
                        My Friends
                    </a>
                    <span>{friendsData.length}</span>
                </div>
                <div className="frReq">
                    <a
                        onClick={(e) => handleFriends(e)}
                        name="un"
                        className={tab !== 'add' ? 'active' : ''}
                    >
                        Friend Requests
                    </a>
                    <span>{FriendReq.length}</span>
                </div>
            </div>
            <ul className="friendsPageList">
                {friends.map((friend, index) => {
                    return (
                        <li key={index} className="friendContainer">
                            <img src={friend.iPath}></img>

                            <div className="friendsPageMeta">
                                <h5>
                                    {friend.name + ''}
                                    {friend.surname}
                                </h5>
                                <span>{friend.position}</span>
                            </div>
                            <div className="add-friend">
                                <button className="unfriend">
                                    {buttons.reject}
                                </button>
                                <button className="addFriend">
                                    {buttons.accept}
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
