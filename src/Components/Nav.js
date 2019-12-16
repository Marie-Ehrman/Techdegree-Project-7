import React from 'react';
import {
    NavLink
  } from 'react-router-dom';



const Nav = (props) => {

  
  return (
    //create main-nav link
    <nav className="main-nav">

        <ul>
           {/* Render a button to get back to the home page */}
              <li>
              <NavLink exact to='/' 
                  onClick={props.onFetch('afremov')}

                activeStyle={{ background: 'salmon' }}>Home</NavLink>
              </li>
              
              <br></br>

            {/* Create 1st default link to Search and 
            load 'roses' photos using the retrievePhotos function from App.js */}
              <li><NavLink to='/roses'
                           onClick={props.onFetch('roses')}
                           activeStyle={{ background: 'salmon' }}>Roses</NavLink>
              </li>

            {/* Create 2nd default link to Search and 
            load 'hydrangea' photos using the retrievePhotos function from App.js */}
              <li><NavLink to='/hydrangeas'
                           onClick={props.onFetch('hydrangeas')}
                           activeStyle={{ background: 'salmon' }}>Hydrangeas</NavLink>
              </li>

            {/* Create 3rd default link to Search and 
            load 'geranium' photos using the retrievePhotos function from App.js */}
              <li><NavLink to='/geraniums' 
                           onClick={props.onFetch('geraniums')}
                           activeStyle={{ background: 'salmon' }}>Geraniums</NavLink>
              </li>

            {/* Create 4th default link to Search and 
            load 'tulips' photos using the retrievePhotos function from App.js */}
              <li><NavLink to='/tulips' 
                           onClick={props.onFetch('tulips')}
                           activeStyle={{ background: 'salmon' }}>Tulips</NavLink>
              </li>
        </ul>


      </nav>
  );
}

export default Nav;