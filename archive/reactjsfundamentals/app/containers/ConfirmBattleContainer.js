import React from 'react';

import ConfirmBattle from '../components/ConfirmBattle';
import githubHelpers from '../utils/githubHelpers';

export default class ConfirmBattleContainer extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  };

  state = {
    isLoading: true,
    playerInfo: []
  };

  render() {
    return (
      <ConfirmBattle
        {...this.state} />
    );
  }

  componentDidMount() {
    var query = this.props.location;
  }
}