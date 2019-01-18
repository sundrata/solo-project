import React from 'react';
import { Link } from 'react-router-dom';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InvalidClearance = () => (
  <div>
    <div>
      <p>
You do not have authorization to access this page!
      </p>
      <Link to="/home">
      <button>Back To Home</button>
      </Link>
    </div>
  </div>
);



export default InvalidClearance;
