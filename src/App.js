import React from 'react';
import Popular from './components/Popular';
import './App.css';
import Battle from './components/Battle'


class App extends React.Component {
    render() {
        return (
          <div className="container">
            <Battle />            
            {/* <Popular /> */}
          </div>
        );
    }
}

export default App;
