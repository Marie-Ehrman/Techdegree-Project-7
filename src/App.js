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
      home: {
          photos:[],
          loading: true,
          title: 'afremov'
    },
      roses: {
          photos:[],
          loading: true,
          title: 'roses'
      },
      hydrangeas: {          
          photos:[],
          loading: true,
          title: 'roses'
      },
      geraniums: {          
          photos:[],
          loading: true,
          title: 'roses'
      },
      tulips: {          
          photos:[],
          loading: true,
          title: 'roses'
      }
    };
  } 


  //when React is mounted it will load photos with "afremov" as the default query
  componentDidMount() {
        //initially mount photos to page
          this.retrievePhotos('afremov');
        
        //individual default topic API
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'afremov'}&per_page=24&format=json&nojsoncallback=1`)
              .then( response => {
                let home = {...this.state.home};
                    home.photos = response.data.photos.photo;
                    home.loading = false;
                    home.title = 'afremov';
                this.setState({ home })
              })

        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'roses'}&per_page=24&format=json&nojsoncallback=1`)
              .then( response => {
                let roses = {...this.state.roses};
                    roses.photos = response.data.photos.photo;
                    roses.loading = false;
                    roses.title = 'roses';
                this.setState({ roses })
              })

        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'hydrangeas'}&per_page=24&format=json&nojsoncallback=1`)
              .then( response => {
                let hydrangeas = {...this.state.hydrangeas};
                hydrangeas.photos = response.data.photos.photo;
                hydrangeas.loading = false;
                hydrangeas.title = 'hydrangeas';
            this.setState({ hydrangeas })
              })

        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'geraniums'}&per_page=24&format=json&nojsoncallback=1`)
              .then( response => {
                let geraniums = {...this.state.geraniums};
                    geraniums.photos = response.data.photos.photo;
                    geraniums.loading = false;
                    geraniums.title = 'geraniums';
                this.setState({ geraniums })
              })
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'tulips'}&per_page=24&format=json&nojsoncallback=1`)
              .then( response => {
                let tulips = {...this.state.tulips};
                    tulips.photos = response.data.photos.photo;
                    tulips.loading = false;
                    tulips.title = 'tulips';
                this.setState({ tulips })
              })
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
    console.log('rendering....again...')
    console.log(this.state.roses.title);
    console.log(this.state.tulips);

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

            
        {/* Set up Routes for default topics */}
        <Switch>

            {/* Render components via the Routes */}
            <Route exact path="/" render={ () => <PhotoList loading={ this.state.home.loading }
                                                           title={ this.state.home.title }
                                                           data={this.state.home.photos } /> } />

            <Route path="/roses" render={ () => <PhotoList loading={ this.state.roses.loading }
                                                           title={ this.state.roses.title }
                                                           data={this.state.roses.photos } /> } />

            <Route path="/hydrangeas" render={ () => <PhotoList loading={ this.state.hydrangeas.loading }
                                                           title={ this.state.hydrangeas.title }
                                                           data={this.state.hydrangeas.photos } /> } />

            <Route path="/geraniums" render={ () => <PhotoList loading={ this.state.geraniums.loading }
                                                           title={ this.state.geraniums.title }
                                                           data={this.state.geraniums.photos } /> } />

            <Route path="/tulips" render={ () => <PhotoList loading={ this.state.tulips.loading }
                                                           title={ this.state.tulips.title }
                                                           data={this.state.tulips.photos } /> } />

            <Route path="/search/:title"  render={ () => <PhotoList loading={ this.state.loading }
                                                           title={ this.state.title }
                                                           data={this.state.photos } /> } />
            <Route component={NotFound} />
        </Switch>
      </div>
     </BrowserRouter>
    );
  }
}

export default App;
