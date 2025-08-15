import { memo } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../src/shared/assets/main-logo.svg';
import homelogo from '../../../src/shared/assets/house.svg';
import movieslogo from '../../../src/shared/assets/movies.svg';
import bookmarklogo from '../../../src/shared/assets/bookmark.svg';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="Header container2">
      <img src={logo} alt="Logo" className="cursor-pointer" onClick={() => navigate("/")} />
      <nav>
        <NavLink to="/" className="Navlink">
          <img className="ml-5" src={homelogo} alt="Home" /> Главный
        </NavLink>
        <NavLink to="/movies" className="Navlink">
          <img className="ml-5" src={movieslogo} alt="Movies" /> Фильмы
        </NavLink>
        <NavLink to="/bookmark" className="Navlink">
          <img className="ml-6" src={bookmarklogo} alt="Bookmarks" /> Сохранней
        </NavLink>
        <NavLink to="/search" className="Navlink">
          <img className="ml-3" src={homelogo} alt="Search" /> Поиск
        </NavLink>
      </nav>
    </div>
  );
};

export default memo(Header);