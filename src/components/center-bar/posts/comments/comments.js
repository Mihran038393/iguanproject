import { FaReply } from 'react-icons/fa';
import './comments.css';

export default function Comments({ comments }) {
    if (comments) {
        return (
            <div className="commentList">
                <ul>
                    {comments.map((comment) => {
                        return (
                            <li key={comment.userId}>
                                <div className="comListItem">
                                    <img src={comment.userPhoto} />

                                    <div className="comUserDetails">
                                        <div className="nameContainer">
                                            <h5>
                                                {comment.userName + ' '}
                                                {comment.userSurname}
                                            </h5>
                                            <span>{comment.publishedDate}</span>
                                            <FaReply className="replyIcon" />
                                        </div>
                                        <p>{comment.commentText}</p>
                                    </div>
                                </div>
                                {comment.replies ? (
                                    <ul className="reply">
                                        {comment.replies.map((comment) => {
                                            return (
                                                <li className="comListItem">
                                                    <img
                                                        src={comment.userPhoto}
                                                    />

                                                    <div className="comUserDetails">
                                                        <div className="nameContainer">
                                                            <h5>
                                                                {comment.userName +
                                                                    ' '}
                                                                {
                                                                    comment.userSurname
                                                                }
                                                            </h5>
                                                            <span>
                                                                {
                                                                    comment.publishedDate
                                                                }
                                                            </span>
                                                            <FaReply className="replyIcon" />
                                                        </div>
                                                        <p>
                                                            {
                                                                comment.commentText
                                                            }
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                ) : (
                                    ''
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
