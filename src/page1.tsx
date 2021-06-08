import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

class page1 extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link to={`/page2`}>Go To page2</Link>
          </a>
        </header>
      </div>
    );
  }
}

export default page1;
