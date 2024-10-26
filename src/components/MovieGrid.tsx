import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";

function MovieGrid() {
    const [movies, setMovies] = useState<Movie[]>([]);
    useEffect(() => {
        fetch("movies.json")
        .then(res => res.json())
        .then(data => setMovies(data));
    }, []);
    return (
        <div className="movies-grid">
            {
                movies.map(movie => (
                    <div key={movie.id} className="movie-card">
                        <img src={`images/${movie.image}`} alt={movie.title}/>
                        <div className="movie-card-info">
                            <h3 className="movie-card-title">{movie.title}</h3>
                            <p className="movie-card-genre">{movie.genre}</p>
                            <p className="movie-card-rating">{movie.rating}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default MovieGrid;