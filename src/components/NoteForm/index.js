import React, { useState, useRef } from 'react';
import './style.css';

function NoteForm(props) {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const titleRef = useRef(null);
  const noteRef = useRef(null);

  const handleSubmit = function (event) {
    event.preventDefault();
    props.appendNote(title, note);
    setTitle('');
    setNote('');
  }

  const handleTitleChange = function(event) {
    setTitle(event.target.value);
  }

  const handleNoteChange = function(event) {
    setNote(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={handleTitleChange}
        ref={titleRef}
      />
      <textarea
        placeholder="Anotações"
        rows={2}
        value={note}
        onChange={handleNoteChange}
        ref={noteRef}>
      </textarea>
      <button type="submit">Salvar</button>
    </form>
  );
}

export default NoteForm;
