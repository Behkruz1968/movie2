import { memo } from 'react';
import { useMovie } from '../../movies/service/useMovie';
import MovieView from '../../movies/components/movie-view/MovieView';
import Hero from '../components/swiper';

const Home = () => {
  const {getMovies} = useMovie({
    page: 1,
    without_genres: "10749,36,18,99,27"
  })
  const {data} = getMovies()
  
  
  return (
    <div className="Home">
      <Hero />
      <MovieView data={data?.results}/>
    </div>
  );
};

export default memo(Home);