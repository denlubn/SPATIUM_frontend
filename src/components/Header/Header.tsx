import { Link } from "react-router-dom";
import './Header.scss';
import { Nav } from "../Nav/Nav";
import { SearchBar } from "../SearchBar/SearchBar";

export const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <div className="header__logo">
            <Link to="/">
              <img src='./favicon.jpeg' className="logo" alt="logo" />
            </Link>
          </div>
          <Nav />
        </div>
        <div className="header__right">
          <SearchBar />
          {/* {!cartCondition && (
            <HeaderButtons
              type="favorite"
            />
          )}
          <HeaderButtons
            type="cart"
          /> */}
        </div>
      </div>
    </div>
  );
};