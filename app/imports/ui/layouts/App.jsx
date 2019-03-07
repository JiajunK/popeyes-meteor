import React from 'react';
import 'semantic-ui-css/semantic.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Popeyes from '../pages/Popeyes';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Popeyes}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    );
  }
}


export default App;
