import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Home = () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
};

export default Home