import React, {Component}from "react";

export default class SearchBar extends Component {
  state = {
    searchTerm: ''
  }

  handleSearch = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })    
  }
  // 

  submitSearch = (event) => {
    event.preventDefault();
    this.props.filterBySearchTerm(this.state.searchTerm)
    this.setState({
      serchTerm: ""
    })
  }

  render() {
    return(
      <form onSubmit = {this.submitSearch}>
        <label> book title:  
      <input type="text" value = {this.state.searchTerm} onChange={this.handleSearch} />
      <input type='submit' values='submit' />
      </label>
      </form>
    )
  }
}
