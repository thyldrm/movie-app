import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";

class App extends React.Component {

    state = {
        movies : [],
        searchQuery:""
    }

    async componentDidMount(){
        const response = await axios.get("http://localhost:3002/movies")
        this.setState({movies: response.data})
    }

    deleteMovie = (movie) => {

        axios.delete(`http://localhost:3002/movies/${movie.id}`)

        const newMovieList = this.state.movies.filter(m => m.id !== movie.id);

        this.setState(state =>({
            movies: newMovieList
        }))
    }

    seachMovie=(event)=>{
        this.setState({searchQuery: event.target.value})
    }

    render(){
        
        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLocaleLowerCase().indexOf(this.state.searchQuery.toLocaleLowerCase()) !== -1;
            }
        )

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovieProp={this.seachMovie}/>
                    </div>
                </div>
                <MovieList
                movies={filteredMovies}
                deleteMovieProp={this.deleteMovie}
                />
            </div>
        )
    }
}

export default App;