import { signedInUser } from '../../store/users-details';

export default function UserData() {
    return (
        <ul className="userInfo">
            <li key={signedInUser.id}>
                <a href="#">
                    <h5>{signedInUser.name}</h5>
                    <span>{signedInUser.role}</span>
                </a>
            </li>
        </ul>
    );
}
