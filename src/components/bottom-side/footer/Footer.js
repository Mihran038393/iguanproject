import winku from '../../../assets/images/winku_logo.png';
import { GoLocation } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaTwitterSquare } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaGooglePlusSquare } from 'react-icons/fa';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="footContainer">
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="widget">
                            <div className="foot-logo">
                                <div className="logo">
                                    <a href="#">
                                        <img src={winku} />
                                    </a>
                                </div>
                                <p>
                                    The trio took this simple idea and built it
                                    into the world’s leading carpooling
                                    platform.
                                </p>
                            </div>
                            <ul className="location">
                                <li>
                                    <GoLocation className="i" />
                                    <p>
                                        33 new montgomery st.750 san francisco,
                                        CA USA 94105.
                                    </p>
                                </li>
                                <li>
                                    <FiPhoneCall className="i" />
                                    <p>+37497097097</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className="widget">
                            <div className="widget-title">
                                <h4>Follow</h4>
                            </div>
                            <ul className="list-style">
                                <li>
                                    <FaSquareFacebook className="i" />
                                    <a href="facebook.com">Facebook</a>
                                </li>
                                <li>
                                    <FaTwitterSquare className="i" />
                                    <a href="twitter.com">Twitter</a>
                                </li>
                                <li>
                                    <RiInstagramFill className="i" />
                                    <a href="instagram.com">Instagram</a>
                                </li>
                                <li>
                                    <FaGooglePlusSquare className="i" />
                                    <a href="google.com">Google</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className="widget">
                            <div className="widget-title">
                                <h4>Navigate</h4>
                            </div>
                            <ul className="list-style">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <a href="instagram.com">News Feed</a>
                                </li>
                                <li>
                                    <a href="google.com">Google</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className="widget">
                            <div className="widget-title">
                                <h4>Useful Links</h4>
                            </div>
                            <ul className="list-style">
                                <li>
                                    <a href="facebook.com">Facebook</a>
                                </li>
                                <li>
                                    <a href="twitter.com">Twitter</a>
                                </li>
                                <li>
                                    <a href="instagram.com">Instagram</a>
                                </li>
                                <li>
                                    <a href="google.com">Google</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className="widget">
                            <div className="widget-title">
                                <h4>Download App</h4>
                            </div>
                            <ul className="list-style">
                                <li>
                                    <button className="btn">Android</button>
                                </li>
                                <li>
                                    <button className="btn">iPhone</button>
                                </li>
                                <li>
                                    <button className="btn">Windows</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottombar">
                <span className="copyright">
                    © Iguan 2024. All rights reserved.
                </span>
            </div>
        </footer>
    );
}
