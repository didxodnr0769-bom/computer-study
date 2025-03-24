"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    setIsLoading(false);

    const json = await response.json();
    setMovies(json);
  };
  useEffect(() => {
    getData();
  });
  return (
    <div>
      {/* <h1>루트 경로입니다zz.!</h1> */}
      {isLoading ? "로딩중!" : JSON.stringify(movies)}
    </div>
  );
}
