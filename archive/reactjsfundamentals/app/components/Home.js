import React from 'react';
import {Link} from 'react-router';

import styles from '../styles';

export default () => {
  return(
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Github Battle</h1>
      <p className="lead">Some fancy motto</p>
      <Link to="/playerOne">
        <button className="btn btn-large btn-success">Get Started</button>
      </Link>
    </div>
  )
}