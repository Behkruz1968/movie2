import { memo, type FC } from "react";
import { useNavigate } from "react-router-dom";
import bookmark from "../../../../shared/assets/bookmark.svg";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date?: string;
}

interface Props {
  data: Movie[] | undefined;
}

const MovieView: FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/movie/${id}`);
  };

  const handleBookmark = (e: React.MouseEvent, movie: Movie) => {
    e.stopPropagation(); 

    const stored = localStorage.getItem("bookmarkedMovies");
    const bookmarks: Movie[] = stored ? JSON.parse(stored) : [];

    const alreadyExists = bookmarks.some((m) => m.id === movie.id);
    if (!alreadyExists) {
      const updated = [...bookmarks, movie];
      localStorage.setItem("bookmarkedMovies", JSON.stringify(updated));
      alert(`"${movie.title}" bookmarked!`);
    } else {
      alert(`"${movie.title}" already bookmarked`);
    }
  };

  const limitedData = data?.slice(0, 20);

  return (
    <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-4">
      {limitedData?.map((movie: Movie) => (
        <div
          key={movie.id}
          className="relative bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer max-w-xs mx-auto"
          onClick={() => handleCardClick(movie.id)}
        >
          <div className="relative">
<div
  onClick={(e) => handleBookmark(e, movie) }
  className="
    absolute top-2 right-2 z-20 
    opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100
    transition-all duration-300 ease-out
    cursor-pointer
    flex items-center justify-center
    w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md
  "
>
  <img
    src={bookmark}
    alt="Bookmark icon"
    className="w-5 h-5"
  />
</div>


         
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                  : "https://parniangostar.com/_next/static/media/imgFallBack.581a9fe3.png"
              }
              alt={movie.title || "Movie poster"}
              className="w-full h-[360px] object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

    
          <div className="p-4">
            <h3
              className="font-bold line-clamp-1 text-white text-lg md:text-xl"
              title={movie.title}
            >
              {movie.title}
            </h3>
            <h3
              className="line-clamp-2 text-gray-300 text-sm md:text-base mt-2"
              title={movie.overview}
            >
              {movie.overview}
            </h3>
            <div className="flex gap-4 mt-3 items-center">
              <p className="text-yellow-400 font-semibold text-sm">
                ⭐ {movie.vote_average.toFixed(1)}/10
              </p>
              <span className="text-gray-400 text-sm">
                {movie.release_date?.split("-")[0]}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(MovieView);
