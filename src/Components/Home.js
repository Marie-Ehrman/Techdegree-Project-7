import React from 'react';

import Search from './Search';
import Nav from './Nav';
import PhotoList from './PhotoList';



const Home = (props) => {

    return(
    
        <div className="container">
            <Search onSearch={ props.retrievePhotos } query={ 'afremov' }/>
            <Nav />
            
            {/* If the page is loading photos, a Loading paragraph message will render */}
            {(props.loading) ? <p>Loading...</p>
             /* Every time the photo state gets updated the PhotoList will
             recieve an array of objects from the data prop*/
            : <PhotoList data={props.photos} query={props.query}/>}
        </div>
    );
}



export default Home;