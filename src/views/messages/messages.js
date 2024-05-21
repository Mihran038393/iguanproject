import { useEffect, useState } from 'react';
import './messages.css';
import { FaRegBell } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../features/messages/chatsSlice';
import { signedInUser } from '../../store/users-details';

export default function Messages() {
    const chats = useSelector((state) => state.chats.chats);
    const [text, setText] = useState('');
    const [currentChat, setCurrentChat] = useState(chats[0]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (chats && chats.length > 0) {
            const updatedChat = chats.find(
                (chat) => chat.id === currentChat.id,
            );
            if (updatedChat) setCurrentChat(updatedChat);
        }
    }, [chats]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!currentChat || !text.trim()) return;

        const newMessage = {
            id: signedInUser.id,
            message: text.trim(),
        };

        dispatch(sendMessage({ newMessage, currentId: currentChat.id }));
        setText('');
    };

    const handleClick = (id) => {
        const chat = chats.find((chat) => chat.id === id);
        setCurrentChat(chat);
    };

    if (!currentChat) {
        return <div>Loading...</div>;
    }

    return (
        <div className="collumnItem" id="msgcnt">
            <div className="msgHead">
                <FaRegBell className="bellIcon" />
                <h3>All Messages</h3>
            </div>
            <div className="msgContainer">
                <ul className="chatsList">
                    {chats.map((chat) => (
                        <li
                            key={chat.id}
                            className="chat"
                            onClick={() => handleClick(chat.id)}
                        >
                            <div className="msgImgCnt">
                                <img src={chat.icon} alt="Chat Icon" />
                                <span
                                    className={`status ${chat.status}`}
                                ></span>
                            </div>
                            <h5>{chat.name}</h5>
                        </li>
                    ))}
                </ul>

                <div className="msgList">
                    <div className="chatHeader">
                        <div className="curChatIcon">
                            <img
                                src={currentChat.icon}
                                alt="Current Chat Icon"
                            />
                        </div>
                        <div className="curChatDetails">
                            <h4>{currentChat.name}</h4>
                            <p>{currentChat.status}</p>
                        </div>
                    </div>
                    <div className="chatMessages">
                        {currentChat.messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`msg ${
                                    signedInUser.id === msg.id
                                        ? 'userMsg'
                                        : 'friendMsg'
                                }`}
                            >
                                <img
                                    src={
                                        signedInUser.id === msg.id
                                            ? signedInUser.icon
                                            : currentChat.icon
                                    }
                                    alt="Message Icon"
                                />
                                <p>{msg.message}</p>
                            </div>
                        ))}
                    </div>
                    <form className="messenger" onSubmit={handleSubmit}>
                        <textarea
                            className="msgtext"
                            name="msgtext"
                            rows={3}
                            placeholder="Write your message here..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        ></textarea>
                        <button className="sendBtn" type="submit">
                            <p>⍋</p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
