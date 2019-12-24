import React, { Component } from 'react';

import Photo from './Photo';
import NoPhotos from './NoPhotos';

//gallery Class Component
class Gallery extends Component {
    
    render(){
    
            //variables to store data props passed from App.js
            let photos;
            const results = this.props.data;

    //for the length of the results list, map out each "photo's" info to the Photo component
    if(results.length > 0){

        photos = results.map(photo =>
            <Photo data={photo} key={photo.id}/>
        );
            //return the photo container div to be rendered by App.js
            return(
                <div className="photo-container">
                    <h2>Images of {this.props.title}</h2>
                    <ul>
                        {photos}
                    </ul>
                </div>
            );

    // Every time the photo state gets updated the PhotoList will
    //recieve an array of objects from the data prop
    } else if (this.props.loading){
    //  If the page is loading photos, a Loading paragraph message will render
            return <p>Loading...</p>;

    // If no photos are found by the search, render the NoPhotos component in place of the Photo component
    } else  {
        photos = <NoPhotos />

        return(
                <div className="photo-container">
                    <ul>
                        {photos}
                    </ul>
                </div>
            );
        }

    }
}

export default Gallery;