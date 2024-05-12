import '../../assets/styles/main.css';
import { photos } from '../../store/photos-path';
import './photos.css';

export default function Photos() {
    return (
        <div className="collumnItem" id="ph">
            <ul>
                {photos.map((photo) => (
                    <img className="photo" src={photo} />
                ))}
            </ul>
        </div>
    );
}
