import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import ParkOneList from '../ParkOneList/ParkOneList';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import Archives from '../Archives/Archives';
import ParkTwoList from '../ParkTwoList/ParkTwoList';
import ParkThreeList from '../ParkThreeList/ParkThreeList';
import ManageEmployees from '../ManageEmployees/ManageEmployees';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
    this.props.dispatch({ type: 'FETCH_FEATURES' })
    this.props.dispatch({ type: 'FETCH_MAINTENANCE' })
    this.props.dispatch({ type: 'FETCH_PARKS' })
    this.props.dispatch({ type: 'FETCH_PERSON'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            {/* route to park 1, only logged in users can access */}
            <ProtectedRoute
              exact
              path="/park1"
              component={ParkOneList}
            />
            {/* test */}
            <ProtectedRoute
              exact
              path="/park2"
              component={ParkTwoList}
            />
            <ProtectedRoute
              exact
              path="/park3"
              component={ParkThreeList}
            />
            {/* admin dashboard only admin can see */}
            <ProtectedRoute
              exact
              path="/adminDash"
              component={AdminDashboard}
            />
            {/* admin archives */}
            <ProtectedRoute
              exact
              path="/archives"
              component={Archives}
            />
            {/* manage employees */}
            <ProtectedRoute
              exact
              path="/employees"
              component={ManageEmployees}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default connect()(App);
