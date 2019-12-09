//Import modules
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch

} from 'react-router-dom';
import axios from 'axios';

//import files
import './App.css';

//import Components
import apiKey from './config';
import PhotoList  from './Components/PhotoList';
import Search from './Components/Search';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      photos:[],
      loading: true
    };
  } 

  //Use axios to fetch Flickr data

  componentDidMount() {
      this.retrievePhotos();
  }

  retrievePhotos = (query = 'afremov') => {

      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
          this.setState({
              photos: response.data.photos.photo,
              loading: false
          })
      })

      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

  }

  //PASS THE QUERY TAG AS THE TITLE FOR PAGE
  //CREATE A SEARCH ROUTE

render() {

  return (
    //lay out the home route page
    <BrowserRouter>
      <div className="container">
        {/* <Switch> */}
          <Search onSearch={this.retrievePhotos}/>
          <Nav 
            roses={this.retrievePhotos} 
            hydrangea={this.retrievePhotos} 
            geranium={this.retrievePhotos}
            tulips={this.retrievePhotos}
            alstroemeria={this.retrievePhotos}/>
          {/* If the page is loading photos, we will render a Loading message */}
          {(this.state.loading) ? <p>Loading...</p>
          /* Every time the photo state gets updated the PhotoList will
          recieve an array of objects from the data prop*/
          : <PhotoList data={this.state.photos} title={this.retrievePhotos.query} />}
            {/* <Route component={NotFound} /> */}
        {/* </Switch> */}
      </div>
        
        </BrowserRouter>
    );
  }
}

export default App;
