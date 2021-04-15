import React, { useState } from 'react';
import NoteCard from '../NoteCard';
import NoteForm from '../NoteForm';
import './style.css';

function NoteList() {

  const [notes, setNotes] = useState([]);

  const appendNote = function(note) {
    const newNotes = [note, ...notes];
    setNotes(newNotes);
  }

  return (
    <ul>
      <li>
        <NoteCard>
          <NoteForm appendNote={appendNote}></NoteForm>
        </NoteCard>
      </li>
      {notes.map(function (elem, index) {
        return(
          <li key={index}>
            <NoteCard title={elem.title} note={elem.note}></NoteCard>
          </li>
        );
      })}
    </ul>
  );
}

export default NoteList;
