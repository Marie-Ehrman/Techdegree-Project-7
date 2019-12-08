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
            load 'cubism' photos using the retrievePhotos function from App.js */}
              <li><NavLink to='/cubism' 
                           onClick={() => props.cubism('cubism')}>Cubism
                  </NavLink></li>
            {/* Create 2nd default link to Search and 
            load 'fauvism' photos using the retrievePhotos function from App.js */}
              <li><NavLink to='/fauvism' 
                           onClick={() => props.fauvism('fauvism')}>Fauvism
                  </NavLink></li>
            {/* Create 3rd default link to Search and 
            load 'surrealism' photos using the retrievePhotos function from App.js */}
              <li><NavLink to='/surrealism'
                           onClick={() => props.surrealism('surrealism')}>Surrealism
                  </NavLink></li>
        </ul>

            {console.log(props)}

          <Route path='/cubism'/>
          <Route path='/fauvism'/>
          <Route path='/surrealism'/>
          <Route path='/impressionism' />

      </nav>
  );
}

export default Nav;