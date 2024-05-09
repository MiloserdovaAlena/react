import { ARTEM_ROUTE, ANNA_ROUTE, VALERA_ROUTE, TABLE_PAGINATION_ROUTE } from "../../app/routes/config";
import { Link } from "react-router-dom";
import { createContext, useState } from "react";

interface AuthContextType {
  loginButtonText: string;
  toggleLogin: () => void;
}

const defaultValue: AuthContextType = {
  loginButtonText: "",
  toggleLogin: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultValue);

const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const loginButtonText = isAuthenticated ? "Выйти" : "Войти";

  const toggleLogin = () => {
    setIsAuthenticated((prevState) => !prevState);
  };
  return (
    <div>
      <div>
        <Link to={ARTEM_ROUTE} className="routeLink">
          О нас
        </Link>
        <Link to={ANNA_ROUTE} className="routeLink">
          Главная
        </Link>
        <Link to={VALERA_ROUTE} className="routeLink">
          Каталог
        </Link>
        {isAuthenticated && (
          <Link to={TABLE_PAGINATION_ROUTE} className="routeLink">
            Отзывы
          </Link>
        )}
      </div>
      <AuthContext.Provider value={{ loginButtonText, toggleLogin }}>
        <div>
          <button onClick={toggleLogin}>{loginButtonText}</button>
        </div>
      </AuthContext.Provider>
    </div>
  );
};

export default Navbar;
