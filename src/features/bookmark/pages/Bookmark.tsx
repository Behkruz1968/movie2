import {  useEffect, useState, type FC } from "react";
import { useNavigate } from "react-router-dom";
import bookmark from "../../../shared/assets/bookmark.svg";
import empty from '../../../shared/assets/empty.gif'
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date?: string;
}

const BookmarkPage: FC = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("bookmarkedMovies");
    if (stored) {
      setBookmarkedMovies(JSON.parse(stored));
    }
  }, []);

  const handleCardClick = (id: number) => {
    navigate(`/movie/${id}`);
  };

  const handleRemoveBookmark = (e: React.MouseEvent, id: number) => {
    e.stopPropagation(); 

    const updatedBookmarks = bookmarkedMovies.filter((movie) => movie.id !== id);
    setBookmarkedMovies(updatedBookmarks);
    localStorage.setItem("bookmarkedMovies", JSON.stringify(updatedBookmarks));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-white mb-6">Bookmark page</h2>
      {bookmarkedMovies.length === 0 ? (
       <div className="flex flex-col items-center justify-center mt-[70px]">
          <img
            src={empty}
            alt="empty"
            className="w-60 h-60 object-contain mb-4 opacity-70"
          />
          <p className="text-gray-400 text-xl font-medium mb-[80px]">
            У вас пока нет закладок
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {bookmarkedMovies.map((movie) => (
            <div
              key={movie.id}
              className="relative bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer max-w-xs mx-auto"
              onClick={() => handleCardClick(movie.id)}
            >
              <div className="relative">
                <img
                  src={bookmark}
                  alt="Remove bookmark"
                  onClick={(e) => handleRemoveBookmark(e, movie.id)}
                  className="absolute top-2 right-2 w-6 h-6 z-10 opacity-80 hover:opacity-100 cursor-pointer"
                />

                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                      : "https://parniangostar.com/_next/static/media/imgFallBack.581a9fe3.png"
                  }
                  alt={movie.title}
                  className="w-full h-[360px] object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-bold line-clamp-1 text-white text-lg md:text-xl" title={movie.title}>
                  {movie.title}
                </h3>
                <h3 className="line-clamp-2 text-gray-300 text-sm md:text-base mt-2" title={movie.overview}>
                  {movie.overview}
                </h3>
                <div className="flex gap-4 mt-3 items-center">
                  <p className="text-yellow-400 font-semibold text-sm">⭐ {movie.vote_average.toFixed(1)}/10</p>
                  <span className="text-gray-400 text-sm">{movie.release_date?.split("-")[0]}</span>
                  {/* movie.release_date?.split("-")[0]  - = {"2023",05,18} [0]=massivni ichidagi 1chisini oladi */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookmarkPage;
