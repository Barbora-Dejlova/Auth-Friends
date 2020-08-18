import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendList from './components/FriendList';

function App() {
  return (
    <Router>
      {/* <div>  
        <div className='uk-margin-bottom'>
          <nav className="uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-center">
                <ul className="uk-navbar-nav">
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/friends'>Friends</Link></li>
                </ul>
            </div>
          </nav>
        </div>   */}
        <div className='uk-container uk-flex uk-flex-center'>
          <Switch>
            <PrivateRoute exact path='/friends' component={FriendList}/>
            <Route path='/login' component={Login} />
            {/* <Route component={Login}/> */}
          </Switch>
        </div>
    </Router>
    );
  }

export default App;
