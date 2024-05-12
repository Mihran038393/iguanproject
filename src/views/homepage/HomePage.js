import userIcon from '../../assets/images/user-avatar.jpg';
import './HomePage.css';
import '../../assets/styles/main.css';
import ShortCuts from '../../components/left-side-bar/shortcuts/ShortCuts';
import Friends from '../../components/right-side-bar/friends/Friends';
import NavBar from '../../components/top-side/navBar';
import UserData from '../../components/right-side-bar/userData';
import { Outlet } from 'react-router-dom';
import CoverContainer from '../../components/top-side/coverContainer';

export default function HomePage() {
    return (
        <div className="layout">
            <CoverContainer />
            <div className="userDetails">
                <div className="userImage">
                    <img className="userIcon" src={userIcon}></img>
                </div>

                <UserData />
                <NavBar />
            </div>
            <div className="container">
                <div>
                    <ShortCuts />
                </div>

                <Outlet />

                <div className="rightSide">
                    <Friends />
                </div>
            </div>
        </div>
    );
}

export { userIcon };
