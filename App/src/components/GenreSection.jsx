import MovieCard from './MovieCard';
import '../styles/GenreSection.css';

export default function GenreSection({ genre, movies }) {
  if (movies.length === 0) {
    return null;
  }

  return (
    <section className="genre-section">
      <div className="genre-header">
        <h2>{genre}</h2>
        <div className="genre-divider"></div>
      </div>

      <div className="genre-movies">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
