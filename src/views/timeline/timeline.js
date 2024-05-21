import '../../assets/styles/main.css';
import './timeline.css';
import Poster from '../../components/center-bar/poster/poster';
import Post from '../../components/center-bar/posts/post';

export default function Timeline() {
    return (
        <div>
            <Poster />
            <Post />
        </div>
    );
}
