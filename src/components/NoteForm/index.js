import React from 'react';
import './style.css';

class NoteForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {title: '', note: ''};

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleNoteChange(event) {
    this.setState({note: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.appendNote(this.state);

    this.handleTitleChange({target: {value: ''}});
    this.handleNoteChange({target: {value: ''}});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <textarea
          placeholder="Anotações"
          rows={2}
          value={this.state.note}
          onChange={this.handleNoteChange}>
        </textarea>
        <button type="submit">Salvar</button>
      </form>
    );
  }
}

export default NoteForm;
