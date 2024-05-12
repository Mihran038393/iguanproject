import { userIcon } from '../../../../../views/homepage/HomePage';
import './commenter.css';
export default function Commenter() {
    return (
        <form className="comContainer">
            <img src={userIcon} />
            <textarea type="text" rows={1} />
        </form>
    );
}
