  import { memo, useState } from "react";
  import { NavLink, useNavigate } from "react-router-dom";
  import { Menu, X } from "lucide-react";
  import "../../index.css";

  import logo from "../../../src/shared/assets/main-logo.svg";
  import homelogo from "../../../src/shared/assets/house.svg";
  import movieslogo from "../../../src/shared/assets/movies.svg";
  import bookmarklogo from "../../../src/shared/assets/bookmark.svg";
  import ru from "../../../src/shared/assets/RU.svg";

  const Header = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return (
      <header className="Header container2 mb-10">
      
        <img
          src={logo}
          alt="Logo"
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />

        
        <nav className="hidden md:flex">
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

          <div className="bg-[#1D1D1D]/50 gap-[8px] flex justify-center items-center rounded-[12px] w-[92px] h-[48px] text-transparent py-[14px] px-[8px] -mr-10 ml-20">
            <img src={ru} alt="" />
            <p className="text-semibold text-white leading-[114%] tracking-[0.01em]">
              Ру
            </p>
          </div>

          <div className="text-center">
            <button className="font-Ax flex items-center justify-center cursor-pointer text-white text-[20px] bg-red-800 w-40 h-14 rounded-2xl ml-10">
              Войти
            </button>
          </div>
        </nav>

      
        <button className="md:hidden text-white ml-auto" onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>

      
        {open && (
          <div
            className="fixed inset-0 bg-black/70 z-50 flex"
            onClick={() => setOpen(false)}
          >
            <div
              className="w-[70%] max-w-[250px] bg-[#0F0F0F] h-full p-6 flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="text-white self-end mb-4"
                onClick={() => setOpen(false)}
              >
                <X size={26} />
              </button>

              <NavLink to="/" onClick={() => setOpen(false)} className="Navlink">
                <img src={homelogo} alt="Home" className="w-5 inline-block mr-2" />
                Главный
              </NavLink>
              <NavLink to="/movies" onClick={() => setOpen(false)} className="Navlink">
                <img src={movieslogo} alt="Movies" className="w-5 inline-block mr-2" />
                Фильмы
              </NavLink>
              <NavLink to="/bookmark" onClick={() => setOpen(false)} className="Navlink">
                <img src={bookmarklogo} alt="Bookmarks" className="w-5 inline-block mr-2" />
                Сохранней
              </NavLink>
              <NavLink to="/search" onClick={() => setOpen(false)} className="Navlink">
                <img src={homelogo} alt="Search" className="w-5 inline-block mr-2" />
                Поиск
              </NavLink>

              <div className="flex items-center gap-2 bg-[#1D1D1D]/50 rounded-lg px-2 py-1">
                <img src={ru} alt="Lang" className="w-5" />
                <p className="text-white text-sm">Ру</p>
              </div>

              <button className="bg-red-800 text-white rounded-lg py-2 hover:bg-red-700">
                Войти
              </button>
            </div>
          </div>
        )}
      </header>
    );
  };

  export default memo(Header);
