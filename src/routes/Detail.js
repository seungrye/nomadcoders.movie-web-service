import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(json.data.movie);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return <div>
    {loading ? <h1>{"Loading..."}</h1> :
      <div>
        <Movie
          id={movie.id}
          cover={movie.medium_cover_image}
          slug={movie.slug}
          title={movie.title}
          synopsis={movie.synopsis}
          genres={movie.genres}
        />
        <hr />
        <ul>
          <li>runtime: {movie.runtime} minutes</li>
          <li>rating: {movie.rating}</li>
          <li>year: {movie.year}</li>
        </ul>
      </div>}
  </div>
}

export default Detail;
