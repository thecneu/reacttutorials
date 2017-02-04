import React from 'react';
import AltContainer from 'alt-container';
import Notes from './notes';

import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class App extends React.Component {
  state = NoteStore.getState();

  componentDidMount() {
    NoteStore.listen(this.storeChanged);
  }

  componentWillUnmount() {
    NoteStore.unlisten(this.storeChanged);
  }

  storeChanged = (state) => {
    this.setState(state);
  };

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <AltContainer
          stores={[NoteStore]}
          inject={{
            notes: () => NoteStore.getState().notes
          }}
        >
          <Notes
            onEdit={this.editNote}
            onDelete={this.deleteNote} />
        </AltContainer>

      </div>
    );
  }

  addNote = () => {
    NoteActions.create({task: 'New task'});
  };

  editNote = (id, task) => {
    if (!task.trim()) {
      return;
    }

    NoteActions.update({id, task});
  };

  deleteNote = (id) => {
    NoteActions.delete(id);
  };
}