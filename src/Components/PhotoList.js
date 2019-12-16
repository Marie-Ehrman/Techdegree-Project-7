import React from 'react';

import Photo from './Photo';
import NoPhotos from './NoPhotos';

const PhotoList = props => {
    
    let photos;
    const results = props.data;

    //for the length of the results list, map out each "photo's" info to the Photo component
    if(results.length > 0){
        photos = results.map(photo =>
            <Photo data={photo} key={photo.id}/>
        );
            return(
                <div className="photo-container">
                    <h2>Images of {props.title}</h2>
                    <ul>
                        {photos}
                    </ul>
                </div>
            );
    // Every time the photo state gets updated the PhotoList will
    //recieve an array of objects from the data prop
    } else if (props.loading){
    //  If the page is loading photos, a Loading paragraph message will render
            return <p>Loading...</p>;
    //
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

export default PhotoList;