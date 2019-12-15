import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Search extends Component {
  
  //search text state that gets updated to the 
    state = {
      searchText: ''
    }
    
    onSearchChange = e => {
      this.setState({ searchText: e.target.value });
    }
    
    //function to handle the submission of a search
    handleSubmit = e => {
      //prevent the page from actually submitting and refreshing to allow for the search submit
      e.preventDefault();
      //onSearch references the value of the search input referred to in the ref prop
      this.props.onSearch(this.query.value);

      //reset the form field so the name query text goes away after submitted
      e.currentTarget.reset();
    }

    
    render() {  

      return (
        
        //render a search form based on html template
        <form className="search-form" onSubmit={this.handleSubmit} >
        {/*give the search form an input element and pass necessary props*/}
          <input type="search"
                 onChange={this.onSearchChange}
                 name="search"
                //this puts a reference to an input on the search class
                 ref={(input) => {this.query = input}} 
                 placeholder="Search for images" />
          <button type="submit" className="search-button">search</button>

          {(this.props.query === 'afremov') 
            ? <Redirect exact to={ `/` } /> 
            : <Redirect to={ `/search/${this.props.query}` }/> 
          }
          
        </form>

      );
    }
  }