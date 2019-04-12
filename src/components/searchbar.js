import React from 'react';

class SearchBar extends React.Component{


    render(){
        return(
            <div className="search-bar">
            <form className="main-form">
            <div className="ui icon input">
            <input type="text" placeholder="Search..." className="input-field" style={{width:"275px"}}/>
            <i className="inverted circular search link icon"></i>
            </div>
            </form>
            </div>
        );
    };
}

export default SearchBar;