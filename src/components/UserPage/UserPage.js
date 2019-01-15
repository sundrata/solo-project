import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = ({ user }) => (
  <div>
    <div className="parkButtonsDiv">
      <Link to="/park1">
        <button className="parkButtons">Park #1</button><br></br>
      </Link>
      <Link to="/park2">
      <button className="parkButtons">Park #2</button><br></br>
      </Link>
      <Link to="/park3">
      <button className="parkButtons">Park #3</button><br></br>
      </Link>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = ({ user }) => (
  { user }
);

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
