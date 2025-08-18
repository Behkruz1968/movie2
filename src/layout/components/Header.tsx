import { memo } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../src/shared/assets/main-logo.svg';
import homelogo from '../../../src/shared/assets/house.svg';
import movieslogo from '../../../src/shared/assets/movies.svg';
import bookmarklogo from '../../../src/shared/assets/bookmark.svg';
import ru from '../../../src/shared/assets/RU.svg'
const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="Header container2 mb-10">
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
       <div className='bg-[#1D1D1D]/50 gap-[8px] flex justify-center items-center rounded-[12px] w-[92px] h-[48px] text-transparent py-[14px] px-[8px] -mr-10 ml-20'>
            <img src={ru} alt="" />
            <p className='text-semibold text-white leading-[114%] tracking-[0.01em]'>Ру</p>
            
          </div>
  <div className="text-center">
  <button
    className="font-Ax flex items-center justify-center cursor-pointer text-white text-[20px] max-[600px]:text-[16px] bg-red-800 w-40 h-14 rounded-2xl ml-10 "
  >
    Войти
  </button>
</div>

      </nav>
    </div>
  );
};

export default memo(Header);