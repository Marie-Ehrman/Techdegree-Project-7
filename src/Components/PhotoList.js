import React from 'react';

import Photo from './Photo';
import NoPhotos from './NoPhotos';

const PhotoList = props => {
    
    let photos;
    const results = props.data;

    if(results.length > 0){
        photos = results.map(photo =>
            <Photo data={photo} key={photo.id}/>
        );
            return(
                <div className="photo-container">
                    <h2>Images of {props.query}</h2>
                    <ul>
                        {photos}
                    </ul>
                </div>
            );

    } else {
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


export default PhotoList;