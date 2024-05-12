import { chats } from '../../store/chats-data';
import './messages.css';
import { FaRegBell } from 'react-icons/fa';

export default function Messages() {
    return (
        <div className="collumnItem" id="msgcnt">
            <div className="msgHead">
                <FaRegBell className="bellIcon" />
                <h3>All Messages</h3>
            </div>
            <div className="msgContainer">
                <ul className="chatsList">
                    {chats.map((chat) => {
                        return (
                            <li key={chat.id} className="chat">
                                <div className="msgImgCnt">
                                    <img src={chat.icon}></img>
                                    <span
                                        className={`status ${chat.status}`}
                                    ></span>
                                </div>
                                <h5>{chat.name}</h5>
                            </li>
                        );
                    })}
                </ul>

                <div className="msgList"></div>
            </div>
        </div>
    );
}
