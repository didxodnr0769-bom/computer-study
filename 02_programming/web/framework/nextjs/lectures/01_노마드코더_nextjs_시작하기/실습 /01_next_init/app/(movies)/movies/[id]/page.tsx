import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export const generateMetadata = async (props) => {
  const params = await props.params;
  const movie = await getMovie(params.id);

  return {
    title: movie.title,
  };
};

const MovieDetail = async (props) => {
  const params = await props.params;
  const id = params.id;

  return (
    <div>
      <Suspense fallback={<h1>Loading Movie Info .. </h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Movie videios Loading..</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};
export default MovieDetail;
