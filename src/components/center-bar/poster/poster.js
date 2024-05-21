import { userIcon } from '../../../views/homepage/HomePage';
import { attachDetails } from '../../../store/attachments-details';
import { signedInUser } from '../../../store/users-details';
import './poster.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../features/posts/postsSlice';
export default function Poster({ setChangePosts }) {
    const dispatch = useDispatch();
    const [file, setFile] = useState('');
    const [text, setText] = useState('');
    const handleChangeText = (event) => {
        setText(event.target.value);
    };

    const GetFile = (event) => {
        setFile(URL.createObjectURL(event.target.files[0]));
    };
    const handlePostAdd = (event) => {
        const now = new Date().toString;
        const newPost = {
            userId: signedInUser.id,
            userPhoto: signedInUser.icon,
            userName: signedInUser.name,
            userSurname: '',
            publishedDate: now[(0, 21)],
            userEmail: 'wintersolder@gmail.com',
            postImage: file,
            viewed: 0,
            likes: 0,
            comments: 0,
            dislikes: 0,
            postText: text,
        };

        event.preventDefault();
        dispatch(addPost(newPost));
        setFile('');
        setText('');
    };

    return (
        <div className="collumnItem" id="pstr">
            <img src={userIcon} />
            <form method="post" className="posterForm" onSubmit={handlePostAdd}>
                <textarea
                    value={text}
                    onChange={handleChangeText}
                    name="textarea"
                    rows={2}
                    placeholder="Share your thoughts, ideas, or updates here..."
                ></textarea>
                <div className="attachments">
                    <ul className="attUl">
                        {attachDetails.map((icon) => {
                            return (
                                <li>
                                    <label>
                                        {icon.icon}
                                        <input
                                            type="file"
                                            className="postFileInp"
                                            onChange={GetFile}
                                        />
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                    <button type="submit">Post</button>
                </div>
            </form>
        </div>
    );
}
