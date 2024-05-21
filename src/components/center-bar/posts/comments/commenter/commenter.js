import { useState } from 'react';
import { userIcon } from '../../../../../views/homepage/HomePage';
import './commenter.css';
import { addComment } from '../../../../../features/posts/postsSlice';
import { useDispatch } from 'react-redux';
import { signedInUser } from '../../../../../store/users-details';

export default function Commenter({ id }) {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const newComment = {
        userId: signedInUser.id,
        userPhoto: signedInUser.icon,
        userName: signedInUser.name,
        userSurname: '',
        publishedDate: 'May 21 19:22PM',
        commentText: text,
        replies: [],
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addComment({ newComment, id }));
        setText('');
    };
    return (
        <form className="comContainer" onSubmit={handleSubmit}>
            <img src={userIcon} />
            <textarea
                value={text}
                type="text"
                rows={1}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Comment</button>
        </form>
    );
}
