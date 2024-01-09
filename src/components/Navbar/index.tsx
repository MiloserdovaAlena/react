import { ARTEM_ROUTE, ANNA_ROUTE, VALERA_ROUTE, TABLE_PAGINATION_ROUTE } from '../../app/routes/config';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export interface StyledProps {
    height?: string;
}

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleAuthClick = () => {
        setIsAuthenticated(!isAuthenticated);
    };

    return ( 
        <div>
            <div className='route'>
                <Link to={ARTEM_ROUTE} className='routeLink'>Артём</Link>
                <Link to={ANNA_ROUTE} className='routeLink'>Аня</Link>
                <Link to={VALERA_ROUTE} className='routeLink'>Валера</Link>
                <Link to={TABLE_PAGINATION_ROUTE} className='routeLink'>Таблицы</Link>
                <button className='btnAuto' onClick={handleAuthClick}>
                    {isAuthenticated ? 'Войти' : 'Авторизация'}
                </button>
            </div>
        </div>
     );
};
 
export default Navbar;
