import { API_URL } from "../app/constants";
import styles from "../app/styles/movie-info.module.css";
export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);

  return response.json();
}

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <img src={movie.poster_path} className={styles.poster} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3> ⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">
          HomePage
        </a>
      </div>
    </div>
  );
};

export default MovieInfo;
