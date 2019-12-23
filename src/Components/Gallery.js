import React, { Component } from 'react';

import Photo from './Photo';
import NoPhotos from './NoPhotos';

class Gallery extends Component {
    
    render(){
    
            let photos;
            const results = this.props.data;

    //for the length of the results list, map out each "photo's" info to the Photo component
    if(results.length > 0){

        photos = results.map(photo =>
            <Photo data={photo} key={photo.id}/>
        );
            return(
                <div className="photo-container">
                    <h2>Images of {this.props.title}</h2>
                    <ul>
                        {photos}
                    </ul>
                </div>
            );
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