import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
        return (
            <div>
                <form>
                    <input className="w-100" placeholder="Search..."></input>
                </form>
            </div>
        )
    }
}

export default SearchBar;
