import React from "react";

const Searchbar = (props) => {
    return(
        <div className="searchbar-container">
            <input
                id="searchbar"
                type="text"
                placeholder="Search by name"
                value={props.searchGuery}
                onChange={(e) => props.setSearchQuery(e.target.value)}
            />
        </div>
    )
}

export default Searchbar;