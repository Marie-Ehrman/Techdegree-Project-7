//Import modules
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,

} from 'react-router-dom';
import axios from 'axios';

//import files
import './App.css';

//import Components
import apiKey from './config';
import Search from './Components/Search';
import Nav from './Components/Nav';
import PhotoList from './Components/PhotoList';
import NotFound from './Components/NotFound';




class App extends Component {
  
  constructor() {
    super();

    //set the state of the application
    this.state = {
      photos:[],
      loading: true,
      title: 'afremov',
    };
  } 


  //when React is mounted it will load photos with "afremov" as the default query
  componentDidMount() {
      this.retrievePhotos('afremov');
  }

  //
  retrievePhotos = (query) => {
      //Use axios to fetch Flickr data
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
          this.setState({
              photos: response.data.photos.photo,
              loading: false,
              title: query,
          })
      })

      .catch(error => {
        console.log('There was an error fetching and/or parsing data', error);
      });

  }


render() {
  return (
    //lay out the home route page
    //wrap the home main container in BrowserRouter tags, listens to the root router for changes
   <BrowserRouter>
    <div className="container">
        {/* Load the Search Bar, Nav Links and Photos */}

            <Search 
                onSearch={ this.retrievePhotos }
                title={ this.state.title }
            />
            <Nav />
            
            <PhotoList loading={this.state.loading}
                        title={ this.state.title }
                        data={this.state.photos}

            />


            
        {/* Set up Routes for default topics */}
        <Switch>

            {/* Render components via the Routes */}
            <Route exact path="/" />
            <Route path="/roses" render={ () => this.retrievePhotos('roses') }/>
            <Route path="/hydrangeas" render={ () => this.retrievePhotos('hydrangeas')} />
            <Route path="/geraniums" render={ () => this.retrievePhotos('geraniums')} />
            <Route path="/tulips" render={ () => this.retrievePhotos('tulips') } />
            <Route path="/search/:title" />
            <Route component={NotFound} />
        </Switch>
      </div>
     </BrowserRouter>
    );
  }
}

export default App;
