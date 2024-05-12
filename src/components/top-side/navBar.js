import { pages } from '../../store/pages-details';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <ul className="pageNav">
            {pages.map((page, index) => {
                return (
                    <li key={index}>
                        <NavLink className="pageLink" to={`${page.path}`}>
                            <span>{page.name}</span>
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
}
