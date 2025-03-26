import { API_URL } from "../app/(home)/page";
import styles from "../app/styles/movie-vidoe.module.css";

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
        />
      ))}
    </div>
  );
};

export default MovieVideos;
