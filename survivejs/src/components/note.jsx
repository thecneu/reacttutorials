import React from 'react';

export default class Note extends React.Component {
  state = {
    editing: false
  };

  render() {
    if (this.state.editing) {
      return this.renderEdit();
    }

    return this.renderNote();
  }

  renderEdit = () => {
    return <input type="text"
            autoFocus={true}
            defaultValue={this.props.task}
            onKeyPress={this.checkEnter}
            onBlur={this.finishEdit} />
  };

  renderNote = () => {
    const onDelete = this.props.onDelete;

    return (
      <div onClick={this.edit}>
        {this.props.task}
        { onDelete ? <button onClick={onDelete}>x</button> : null }
      </div>
    );
  };

  renderDelete = () => {
    return
  }

  edit = () => {
    this.setState({
      editing: true
    });
  };

  checkEnter = (e) => {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  finishEdit = (e) => {
    const value = e.target.value;

    if (this.props.onEdit) {
      this.props.onEdit(value);
    }

    this.setState({
        editing: false
      });
  };
}