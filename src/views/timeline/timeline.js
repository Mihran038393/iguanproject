import '../../assets/styles/main.css';
import './timeline.css';
import Poster from '../../components/center-bar/poster/poster';
import Post from '../../components/center-bar/posts/post';
import { useState } from 'react';
import { posts } from '../../store/posts-details';
export default function Timeline() {
    const [changePosts, setChangePosts] = useState(posts);
    return (
        <div>
            <Poster setChangePosts={setChangePosts} />
            <Post posts={changePosts} />
        </div>
    );
}
