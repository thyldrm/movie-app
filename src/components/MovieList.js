import React, { Component } from 'react'

class MovieList extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4 shadow-sm">
                        <img src="https://www.themoviedb.org/t/p/original/gk1IvgCYg6v5H5cps21ILSOrYER.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">
                                Movie App
                            </h5>
                            <p className="card-text">
                                Movie Desc
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-md btn-outline-danger">Delete</button>
                                <h2>
                                    <span className="badge badge-info">9.9</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    project is being updated.......
                </div>
                
            </div>
        )
    }
}

export default MovieList;
