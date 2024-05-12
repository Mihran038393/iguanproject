import './LoginPage.css';
import Wink from '../../assets/images/wink.png';
import Input from '@mui/joy/Input';
import { Checkbox } from '@mui/joy';
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    return (
        <div className="wrapper">
            <div className="welcome">
                <div className="land-meta">
                    <h1>Winku</h1>
                    <p>
                        Winku is free to use for as long as you want with two
                        active projects.
                    </p>
                    <div className="welcomeLogo">
                        <span>
                            <img src={Wink}></img>
                        </span>
                    </div>
                </div>
            </div>
            <div className="loginFieldsArea">
                <div className="loginFields">
                    <h2>Login</h2>
                    <p>
                        Don’t use Winku Yet?<a href="#">Take the tour</a> or{' '}
                        <a href="#">Join now</a>
                        <form method="post">
                            <Input
                                name="login"
                                type="text"
                                placeholder="Login..."
                                className="inputField"
                            />
                            <Input
                                name="pass"
                                type="password"
                                placeholder="Password..."
                                className="inputField"
                            />
                            <div className="checkbox">
                                <label>
                                    <Checkbox className="ch" color="primary" />
                                    Remember Me
                                </label>
                            </div>
                            <a href="#" className="forgotPwd">
                                Forgot Password?
                            </a>
                            <div className="btnContainer">
                                <Link to="/">
                                    <Button
                                        size="lg"
                                        className="btn"
                                        variant="soft"
                                    >
                                        Login
                                    </Button>
                                </Link>
                                <Button
                                    size="lg"
                                    className="btn"
                                    variant="soft"
                                >
                                    Register
                                </Button>
                            </div>
                        </form>
                    </p>
                </div>
            </div>
        </div>
    );
}
