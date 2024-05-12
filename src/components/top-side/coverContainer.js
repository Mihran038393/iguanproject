import coverImage from '../../assets/images/timeline-1.jpg';
import { MdAddAPhoto } from 'react-icons/md';

export default function CoverContainer() {
    return (
        <div className="userCover">
            <img className="coverImage" src={coverImage} />

            <form className="editPhoto">
                <MdAddAPhoto className="i" />
                <label className="fileContainer">
                    Edit Cover Photo
                    <input type="file" name="file" />
                </label>
            </form>
            <div className="friends">
                <span>546 Folowers |</span>
                <div className="addFriends">
                    <div>
                        <p>Add Friends</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
