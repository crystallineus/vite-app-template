import { Movie } from "../models/Movie";

function MovieCard({movie} : {movie: Movie}) {
    const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const target = e.currentTarget as HTMLImageElement;
        target.src = "images/default.jpg";
    };

    return (
        <div key={movie.id} className="movie-card">
            <img src={`images/${movie.image}`} alt={movie.title} onError={handleError}/>
            <div className="movie-card-info">
                <h3 className="movie-card-title">{movie.title}</h3>
                <p className="movie-card-genre">{movie.genre}</p>
                <p className="movie-card-rating">{movie.rating}</p>
            </div>
        </div>
    );
}

export default MovieCard;