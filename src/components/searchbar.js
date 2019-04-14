import React from 'react';
import axios from 'axios';

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }
    state = {
            term : '',
            geo: null
        }

    onInputChange = (event) => {
        this.setState({term: event.target.value});

    }

    onLocationSubmit = (event) => {
        event.preventDefault();
        //axios call here
            axios.get("https://cors-anywhere.herokuapp.com/https://api.opencagedata.com/geocode/v1/json", {

            params: {q: this.state.term,
            key: '771ef6164a8a4b479fef1925108e2a48'}

            }).then((res)=>{
                this.setState({geo: res.data.results[0].geometry});
                this.props.onLocationSubmit(this.state.geo, this.state.term);
            });


    }


    render(){
        return(
            <div className="search-bar">
            <form className="main-form" onSubmit={this.onLocationSubmit}>
            <div className="ui icon input">
            <input type="text" placeholder="Search..." className="input-field" style={{width:"275px"}} onChange={this.onInputChange}/>
            <i className="inverted circular search link icon"></i>
            </div>
            </form>
            </div>
        );
    };
}

export default SearchBar;