import { memo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../src/shared/assets/main-logo.svg";
import homelogo from "../../../src/shared/assets/house.svg";
import movieslogo from "../../../src/shared/assets/movies.svg";
import bookmarklogo from "../../../src/shared/assets/bookmark.svg";
import ru from "../../../src/shared/assets/RU.svg";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#0f0f0f] text-white flex items-center justify-between px-4 py-3 relative">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="cursor-pointer w-28"
        onClick={() => navigate("/")}
      />

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-8">
        <NavLink to="/" className="Navlink flex items-center gap-2">
          <img src={homelogo} alt="Home" /> Главный
        </NavLink>
        <NavLink to="/movies" className="Navlink flex items-center gap-2">
          <img src={movieslogo} alt="Movies" /> Фильмы
        </NavLink>
        <NavLink to="/bookmark" className="Navlink flex items-center gap-2">
          <img src={bookmarklogo} alt="Bookmarks" /> Сохранней
        </NavLink>
        <NavLink to="/search" className="Navlink flex items-center gap-2">
          <img src={homelogo} alt="Search" /> Поиск
        </NavLink>

        {/* RU Selector */}
        <div className="bg-[#1D1D1D]/50 flex items-center gap-2 rounded-xl w-[92px] h-[48px] px-3">
          <img src={ru} alt="ru" />
          <p className="font-semibold text-white">Ру</p>
        </div>

        {/* Login button */}
        <button className="font-Ax flex items-center justify-center cursor-pointer text-white text-[20px] bg-red-800 w-40 h-14 rounded-2xl">
          Войти
        </button>
      </nav>

      {/* Mobile burger */}
      <button
        className="lg:hidden text-white text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 right-4 bg-[#1D1D1D] w-56 rounded-xl shadow-lg p-4 flex flex-col gap-4 z-50">
          <NavLink to="/" className="Navlink flex items-center gap-2">
            <img src={homelogo} alt="Home" /> Главный
          </NavLink>
          <NavLink to="/movies" className="Navlink flex items-center gap-2">
            <img src={movieslogo} alt="Movies" /> Фильмы
          </NavLink>
          <NavLink to="/bookmark" className="Navlink flex items-center gap-2">
            <img src={bookmarklogo} alt="Bookmarks" /> Сохранней
          </NavLink>
          <NavLink to="/search" className="Navlink flex items-center gap-2">
            <img src={homelogo} alt="Search" /> Поиск
          </NavLink>

          <div className="bg-[#1D1D1D]/50 flex items-center gap-2 rounded-xl w-[92px] h-[48px] px-3">
            <img src={ru} alt="ru" />
            <p className="font-semibold text-white">Ру</p>
          </div>

          <button className="font-Ax flex items-center justify-center cursor-pointer text-white text-[18px] bg-red-800 w-full h-12 rounded-xl">
            Войти
          </button>
        </div>
      )}
    </header>
  );
};

export default memo(Header);
