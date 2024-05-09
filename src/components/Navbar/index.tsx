import { ARTEM_ROUTE, ANNA_ROUTE, VALERA_ROUTE, TABLE_PAGINATION_ROUTE } from "../../app/routes/config";
import { Link } from "react-router-dom";
import { createContext, useState } from "react";
import styled from "styled-components";

interface AuthContextType {
  loginButtonText: string;
  toggleLogin: () => void;
}

const defaultValue: AuthContextType = {
  loginButtonText: "",
  toggleLogin: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultValue);

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f9f9f9;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
`;

const NavbarButton = styled.button`
  font-size: 20px;
  font-weight: 600;
  background-color: #f9f9f9;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;

const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const loginButtonText = isAuthenticated ? "Выйти" : "Войти";

  const toggleLogin = () => {
    setIsAuthenticated((prevState) => !prevState);
  };
  return (
    <NavbarWrapper>
      <div>
        <NavbarLink to={ARTEM_ROUTE} className="routeLink">
          О нас
        </NavbarLink>
        <NavbarLink to={ANNA_ROUTE} className="routeLink">
          Главная
        </NavbarLink>
        <NavbarLink to={VALERA_ROUTE} className="routeLink">
          Каталог
        </NavbarLink>
        {isAuthenticated && (
          <NavbarLink to={TABLE_PAGINATION_ROUTE} className="routeLink">
            Отзывы
          </NavbarLink>
        )}
      </div>
      <AuthContext.Provider value={{ loginButtonText, toggleLogin }}>
        <NavbarButton onClick={toggleLogin}>{loginButtonText}</NavbarButton>
      </AuthContext.Provider>
    </NavbarWrapper>
  );
};

export default Navbar;
