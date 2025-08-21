import { memo } from "react";
import { useMovie } from "../service/useMovie";
import MovieView from "../components/movie-view/MovieView";
import { Pagination, Select } from "antd";
import { useSearchParams } from "react-router-dom";
import { useGenre } from "../service/useGenre";

const Movies = () => {
  const { getMovies } = useMovie();
  const { getGenres } = useGenre();
  const [params, setParams] = useSearchParams();

  const page = params.get("page") || "1";
  const with_genres = params.get("laylo") || "";

  const { data } = getMovies({
    page,
    with_genres,
    sort_by: "popularity.desc",
  });

  const { data: genreData } = getGenres();
  const options = genreData?.genres?.map(({ id, name }: any) => ({
    value: id.toString(),
    label: name,
  }));

  const handleChange = (value: number) => {
    params.set("page", value.toString());
    setParams(params);
  };

  const handleChangeGenre = (value: string) => {
    params.set("laylo", value);
    setParams(params);
  };

  return (
    <div className="Movies">
      
      <div className="container " >
        <Select
          onChange={handleChangeGenre}
          className="w-40"
          placeholder="Select genre"
          options={options}
        />
      </div>
      <MovieView data={data?.results} />
      <div className="flex justify-center">
        <Pagination
          current={Number(page)}
          showSizeChanger={false}
          onChange={handleChange}
          total={data?.total_pages}
          defaultPageSize={1}
        />
      </div>
    </div>
  );
};

export default memo(Movies);