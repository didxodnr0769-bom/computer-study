import Movie from "../../components/Movie";
import styles from "../styles/home.module.css";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  const res = await fetch(API_URL).then((res) => res.json());

  return res;
};
export default async function HomePage() {
  await new Promise((resolve) => setTimeout(() => resolve({}), 1000));
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
