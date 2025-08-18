import { memo } from "react";
import { useMovie } from "../../movies/service/useMovie";
import MovieView from "../../movies/components/movie-view/MovieView";

const Movies = () => {
  const { getMovies } = useMovie({ page: 1 });

  const { data } = getMovies();

  return (
    <div className="Movies">
      <h2>Movies</h2>
      <MovieView data={data?.results} />
    </div>
  );
};

export default memo(Movies);
