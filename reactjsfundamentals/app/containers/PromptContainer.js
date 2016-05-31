import React from 'react';
import Prompt from '../components/Prompt';
import styles from '../styles';

export default class PromptContainer extends React.Component {
  route = this.props.route;

  state = {
    username: ''
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    );
  }

  handleUpdateUser = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  handleSubmitUser = (e) => {
    e.preventDefault();

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });
    } else {
      this.context.router.push('/playerTwo/' + this.state.username);
    }

    this.setState({
      username: ''
    });
  }
}
