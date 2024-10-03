import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, cover, slug, title, synopsis, genres }) {
  return <div>
    <Link to={`/movie/${id}`}>
      <img src={cover} alt={slug} />
      <h2>
        {title}
      </h2>
    </Link>
    <p>{synopsis}</p>
    <ul>
      {genres.map((genre, index) => <li key={index}>{genre}</li>)}
    </ul>
  </div>
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired
}

export default Movie;
