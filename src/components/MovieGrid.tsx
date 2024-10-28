import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";
import MovieCard from "./MovieCard";

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
                    <MovieCard movie={movie} key={movie.id} />
                ))
            }
        </div>
    )
}

export default MovieGrid;