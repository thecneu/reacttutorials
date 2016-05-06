import React, {PropTypes} from 'react';
import styles from '../styles';

export default class Prompt extends React.Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
        <h1>{this.props.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.props.onSubmitUser}>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Github Username"
                onChange={this.props.onUpdateUser}
                value={this.props.username}
              />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button type="submit" className="btn btn-block btn-success">Continue</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
