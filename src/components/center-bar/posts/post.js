import { BsEye } from 'react-icons/bs';
import { FaRegComments } from 'react-icons/fa';
import { IoIosHeartEmpty } from 'react-icons/io';
import { RiDislikeLine } from 'react-icons/ri';
import { FaShareAltSquare } from 'react-icons/fa';
import './post.css';
import Commenter from './comments/commenter/commenter';
import Comments from './comments/comments';
import { useSelector } from 'react-redux';

export default function Post() {
    const posts = useSelector((state) => state.posts.posts);

    return (
        <>
            {posts.map((post, index) => {
                return (
                    <div className="collumnItem" id="post">
                        <div className="postUserDetails">
                            <img src={post.userPhoto} id="pstUsr" />
                            <div className="userData">
                                <h3>
                                    {post.userName + ' '}
                                    {post.userSurname}
                                </h3>
                                <p>{post.publishedDate}</p>
                            </div>
                        </div>
                        <img src={post.postImage} id="pstImg" />
                        <div className="postInfo">
                            <ul>
                                <li id={index}>
                                    <label>
                                        <BsEye className="infoIcon" />
                                        <p className="infoData">
                                            {post.viewed}
                                        </p>
                                    </label>
                                </li>
                                <li id={index}>
                                    <label>
                                        <FaRegComments className="infoIcon" />
                                        <p className="infoData">
                                            {post.comments}
                                        </p>
                                    </label>
                                </li>
                                <li id={index}>
                                    <label>
                                        <IoIosHeartEmpty className="infoIcon" />
                                        <p className="infoData">{post.likes}</p>
                                    </label>
                                </li>
                                <li id={index}>
                                    <label id="dsl">
                                        <RiDislikeLine className="infoIcon" />
                                        <p className="infoData">
                                            {post.dislikes}
                                        </p>
                                    </label>
                                </li>
                                <FaShareAltSquare
                                    className="infoIcon"
                                    id="shr"
                                />
                            </ul>
                        </div>
                        <p className="postText">{post.postText}</p>
                        <Comments comments={post.commentsData} />
                        <Commenter id={post.userId} />
                    </div>
                );
            })}
        </>
    );
}
