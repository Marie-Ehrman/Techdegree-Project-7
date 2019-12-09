import React from 'react';
import {
    Route,
    NavLink
  } from 'react-router-dom';



const Nav = (props) => {

  return (
    //create main-nav link
    <nav className="main-nav">

        <ul>
            {/* Create 1st default link to Search and 
            load 'roses' photos using the retrievePhotos function from App.js */}
              <li><NavLink to='/roses' 
                           onClick={() => props.roses('roses')}>Roses
                  </NavLink></li>
            {/* Create 2nd default link to Search and 
            load 'hydrangea' photos using the retrievePhotos function from App.js */}
              <li><NavLink to='/hydrangea' 
                           onClick={() => props.hydrangea('hydrangea')}>Hydrangea
                  </NavLink></li>
            {/* Create 3rd default link to Search and 
            load 'geranium' photos using the retrievePhotos function from App.js */}
              <li><NavLink to='/geranium'
                           onClick={() => props.geranium('geranium')}>Geranium
                  </NavLink></li>
            {/* Create 4th default link to Search and 
            load 'tulips' photos using the retrievePhotos function from App.js */}
              <li><NavLink to='/tulips'
                           onClick={() => props.tulips('tulips')}>Tulips
                  </NavLink></li>
                  
        </ul>

      {/* Set up Routes for default topics */}
          <Route path='/roses'/>
          <Route path='/hydrangea'/>
          <Route path='/geranium'/>
          <Route path='/tulips'/>


      </nav>
  );
}

export default Nav;