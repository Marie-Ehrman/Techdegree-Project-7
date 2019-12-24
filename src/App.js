//Import modules
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,

} from 'react-router-dom';
import axios from 'axios';

//Import files
import './App.css';

//Import Components
import apiKey from './config';
import Search from './Components/Search';
import Nav from './Components/Nav';
import Gallery from './Components/Gallery';




class App extends Component {
  
  constructor() {
    super();

    //set the state of the application and for default topic routes
    this.state = {
      photos:[],
      loading: true,
      title: '',
      home: {
          photos:[],
          loading: true,
    },
      monsteras: {
          photos:[],
          loading: true,
      },
      hydrangeas: {          
          photos:[],
          loading: true,
      },
      geraniums: {          
          photos:[],
          loading: true,
      },
      tulips: {          
          photos:[],
          loading: true,
      }
    };
  } 


  //when React is mounted it will load photos with "afremov" as the default query
  componentDidMount() {
        //initially mount photos to page
          this.retrievePhotos('afremov');
        
        //individual default topic API
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'afremov'}&per_page=24&format=json&nojsoncallback=1&safe_search=1`)
              .then( response => {
                let home = {...this.state.home};
                    home.photos = response.data.photos.photo;
                    home.loading = false;
                    home.title = 'afremov';
                this.setState({ home })
              })
        //fetch monstera photos
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'monstera'}&per_page=24&format=json&nojsoncallback=1&safe_search=1`)
              .then( response => {
                let monsteras = {...this.state.monsteras};
                    monsteras.photos = response.data.photos.photo;
                    monsteras.loading = false;
                    monsteras.title = 'monsteras';
                this.setState({ monsteras })
              })

        //fetch hydrangea photos
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'hydrangeas'}&per_page=24&format=json&nojsoncallback=1&safe_search=1`)
              .then( response => {
                let hydrangeas = {...this.state.hydrangeas};
                hydrangeas.photos = response.data.photos.photo;
                hydrangeas.loading = false;
                hydrangeas.title = 'hydrangeas';
            this.setState({ hydrangeas })
              })
       
       //fetch geranium photos
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'geraniums'}&per_page=24&format=json&nojsoncallback=1&safe_search=1`)
              .then( response => {
                let geraniums = {...this.state.geraniums};
                    geraniums.photos = response.data.photos.photo;
                    geraniums.loading = false;
                    geraniums.title = 'geraniums';
                this.setState({ geraniums })
              })

        //fetch tulip photos      
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'tulips'}&per_page=24&format=json&nojsoncallback=1&safe_search=1`)
              .then( response => {
                let tulips = {...this.state.tulips};
                    tulips.photos = response.data.photos.photo;
                    tulips.loading = false;
                    tulips.title = 'tulips';
                this.setState({ tulips })
              })
  }

  //set up function to retrieve photos for Search
  retrievePhotos = (query) => {
      //Use axios to fetch Flickr data and set initial state upon fetch
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1`)
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

    //wrap the home main container in BrowserRouter tags, listens to the root router for changes
    <BrowserRouter>
      <div className="container">

          {/* Load the Search Bar and Nav Links on the page */}
              <Search 
                  onSearch={ this.retrievePhotos }
                  title={ this.state.title }
              />

              <Nav />

            
        {/* Set up Root Route and Routes for default topics in Switch*/}
        <Switch>
            {/* Render Gallery components using the Route's state */}
            <Route exact path="/" render={ () => <Gallery loading={ this.state.home.loading }
                                                           title={ this.state.home.title }
                                                           data={this.state.home.photos } /> } />

            <Route path="/monsteras" render={ () => <Gallery loading={ this.state.monsteras.loading }
                                                           title={ this.state.monsteras.title }
                                                           data={this.state.monsteras.photos } /> } />

            <Route path="/hydrangeas" render={ () => <Gallery loading={ this.state.hydrangeas.loading }
                                                           title={ this.state.hydrangeas.title }
                                                           data={this.state.hydrangeas.photos } /> } />

            <Route path="/geraniums" render={ () => <Gallery loading={ this.state.geraniums.loading }
                                                           title={ this.state.geraniums.title }
                                                           data={this.state.geraniums.photos } /> } />

            <Route path="/tulips" render={ () => <Gallery loading={ this.state.tulips.loading }
                                                           title={ this.state.tulips.title }
                                                           data={this.state.tulips.photos } /> } />

            <Route path="/search/:title"  render={ () => <Gallery loading={ this.state.loading }
                                                           title={ this.state.title }
                                                           data={this.state.photos } /> } />
        </Switch>
      </div>
     </BrowserRouter>
    );
  }
}

export default App;
