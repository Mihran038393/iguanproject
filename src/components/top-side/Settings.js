import { IoSearchOutline } from 'react-icons/io5';
import { IoHomeOutline } from 'react-icons/io5';

export default function SettingsBar() {
    const settingsItems = [
        {
            name: 'Search',
            icon: <IoSearchOutline />,
            link: 'https:/amazon.com',
        },
        {
            name: 'Home',
            icon: <IoHomeOutline />,
            link: 'https:/amazon.com',
        },
    ];

    return (
        <ul className="settingsBar">
            {settingsItems.map((item, index) => {
                return (
                    <li key={index}>
                        <a className="settings_item" href={`${item.link}`}>
                            {item.icon}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}
