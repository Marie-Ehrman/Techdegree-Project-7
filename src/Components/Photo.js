import React from 'react';

const Photo = props => {

    const id = props.data.id;
    const server = props.data.server;
    const farm = props.data.farm;
    const secret = props.data.secret;


    return (
    <li>
        <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt="" />
    </li>

    );}

export default Photo;