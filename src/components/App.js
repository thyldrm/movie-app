import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

class App extends React.Component {

    state = {
        movies : [],
        searchQuery:""
    }

    async componentDidMount(){
        const baseURL = "http://localhost:3002/movies";
        const response = await fetch(baseURL);
        const data= await response.json();
        this.setState({movies: data})
    }

    deleteMovie = (movie) => {
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