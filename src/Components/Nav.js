import React, { Component }from 'react';
import {
    NavLink
  } from 'react-router-dom';



  class Nav extends Component {

  render(){
    
    return (
    //create main-nav link
    <nav className="main-nav">

        <ul>
           {/* Render a button to get back to the home page */}
              <li>
              <NavLink exact to='/' activeStyle={{ background: 'salmon' }}>Home</NavLink>
              </li>
              
              <br></br>

            {/* Create 1st default link to Search and 
            load 'Monstera' photos using the retrievePhotos function from App.js */}
              <li><NavLink to={'/monsteras'} activeStyle={{ background: 'salmon' }}>Monsteras</NavLink>
              </li>

            {/* Create 2nd default link to Search and 
            load 'hydrangea' photos using the retrievePhotos function from App.js */}
              <li><NavLink to='/hydrangeas' activeStyle={{ background: 'salmon' }}>Hydrangeas</NavLink>
              </li>

            {/* Create 3rd default link to Search and 
            load 'geranium' photos using the retrievePhotos function from App.js */}
              <li><NavLink to='/geraniums' activeStyle={{ background: 'salmon' }}>Geraniums</NavLink>
              </li>

            {/* Create 4th default link to Search and 
            load 'tulips' photos using the retrievePhotos function from App.js */}
              <li><NavLink to='/tulips' activeStyle={{ background: 'salmon' }}>Tulips</NavLink>
              </li>
        </ul>


      </nav>
    );
  }
 }

export default Nav;