import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
//587895fd

import '../src/App.css';
import Searchicon from '../src/search.svg'
const API_URL = 'http://www.omdbapi.com?apikey=587895fd'

const App = () => {

    const [movies, setMovies] = useState([]);

    const SearchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        SearchMovies('Batman');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand </h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="Batman"
                    onChange={() => { }}
                />
                <img
                    src={Searchicon}
                    alt="Search"
                    onClick={() => { }}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>

                    )
            }
        </div>
    );
}

export default App;