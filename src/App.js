import { Route, Routes, useLocation } from 'react-router-dom';
import Topbar from './components/top-side/Topbar';
import HomePage from './views/homepage/HomePage';
import './assets/styles/main.css';
import LoginPage from './views/loginpage/LoginPage';
import Footer from './components/bottom-side/footer/Footer';
import Timeline from './views/timeline/timeline';
import Photos from './views/photos/photos';
import { useEffect } from 'react';
import Friends from './views/friends/friendsPage';
import Messages from './views/messages/messages';

function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const excludeHeaderPaths = ['/login'];

    const isHeaderExcluded = excludeHeaderPaths.includes(pathname);

    return (
        <div>
            
            {!isHeaderExcluded && <Topbar />}
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route index element={<Timeline />} />
                    <Route path="photos" element={<Photos />} />
                    <Route path="friends" element={<Friends />} />
                    <Route path="messages" element={<Messages />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            {!isHeaderExcluded && <Footer />}
        </div>
    );
}

export default App;
