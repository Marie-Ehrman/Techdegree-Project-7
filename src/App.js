//Import modules
import React, { Component } from 'react';
import {
  BrowserRouter,

} from 'react-router-dom';
import axios from 'axios';

//import files
import './App.css';

//import Components
import apiKey from './config';
import PhotoList  from './Components/PhotoList';
import Search from './Components/Search';
import Nav from './Components/Nav';


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      photos:[],
      loading: true
    };
  } 

  //Use axios to fetch Flickr data
  //Flickr API key a0c9675ec73aedbcc9e76a7c2aeb365a

  componentDidMount() {
      this.retrievePhotos('afremov');
  }

  retrievePhotos = (query) => {

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

render() {

  console.log(this.state.photos);
  return (
    //lay out the home route page
    <BrowserRouter>
        <div className="container">
          <Search onSearch={this.retrievePhotos}/>
          <Nav 
            cubism={this.retrievePhotos} 
            fauvism={this.retrievePhotos} 
            surrealism={this.retrievePhotos}
            impressionism={this.retrievePhotos}/>
          {/* If the page is loading photos, we will render a Loading message */}
          {(this.state.loading) ? <p>Loading...</p>
          /* Every time the photo state gets updated the PhotoList will
          recieve an array of objects from the data prop*/
          : <PhotoList data={this.state.photos} />}
        </div>

        </BrowserRouter>
    );
  }
}

export default App;
