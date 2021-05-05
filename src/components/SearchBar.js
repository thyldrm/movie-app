import React, { Component } from 'react'

class SearchBar extends Component {

    

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-row mb-5">
                        <div className="col-9">
                            <input 
                            onChange={this.props.searchMovieProp} 
                            type="text" className="form-control" placeholder="Search..."
                            />
                        </div>
                        <div className="col-3">
                            <button 
                                    to="/add"
                                    type="button"
                                    className="btn btn-md btn-danger"
                                    style={{float:'right'}}
                                    >
                                    Add Movie
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
