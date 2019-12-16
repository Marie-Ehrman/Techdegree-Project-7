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
      title: '',
    };
  } 


  //when React is mounted it will load photos with "afremov" as the default query
  componentDidMount() {
      this.retrievePhotos();
  }

  //
  retrievePhotos = (query = 'afremov') => {
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
            <Nav onFetch={ this.retrievePhotos }
            />
            
        {/* Set up Routes for default topics */}
        <Switch>

            {/* Render components via the Routes */}
            <Route exact path="/" render={() => <PhotoList loading={this.state.loading}
                        title={ "afremov" }
                        data={this.state.photos}
            />}/>
            <Route path="/roses" render={ () => <PhotoList loading={this.state.loading}
                        title={"roses"}
                        data={this.state.photos}
            /> }/>
            <Route path="/hydrangeas" render={ () => <PhotoList loading={this.state.loading}
                        title={ "hydrangeas" }
                        data={this.state.photos} /> } />
            <Route path="/geraniums" render={ () => <PhotoList loading={this.state.loading}
                        title={ "geraniums" }
                        data={this.state.photos} /> } />
            <Route path="/tulips" render={ () => <PhotoList loading={this.state.loading}
                        title={ "tulips" }
                        data={this.state.photos} /> } />
            <Route path="/search/:title" />
            <Route component={NotFound} />
        </Switch>
      </div>
     </BrowserRouter>
    );
  }
}

export default App;
