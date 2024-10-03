import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum=rating=9.5`)
    const json = await response.json();

    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
    console.log(movies[0])
  }, []);

  return (
    <div>
      {loading ? <h1>Loading...</h1> :
        movies.map((item) => {
          return <Movie
            key={item.id}
            id={item.id}
            cover={item.medium_cover_image}
            slug={item.slug}
            title={item.title}
            synopsis={item.synopsis}
            genres={item.genres}
          />
        })}
    </div>
  );

}

export default Home;
