import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import List from './List'

const SEARCH_URL = 'https://api.github.com/search/repositories';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  render() {
    const searchRepo = (event) => {
      event.preventDefault();
      axios
        .get(SEARCH_URL, {params: {q: event.target.value}})
        .then(response => {
          this.setState({items: response.data.items}) 
        });
    };

    return (
      <div>
        <p>Search repository</p>
        <input type='text' id='search-bar' placeholder='Search for...' onChange={searchRepo}/>
        <br/>
        <List items={this.state.items}/>
      </div>
    );
  }
}

export default Search;
