import './style.css';

function NoteCard(props) {
  return (
    <div className="note-card">
      {!props.children &&
        <div>
          <h3>{props.title}</h3>
          <p>{props.note}</p>
        </div>
      }
      {props.children && props.children}
    </div>
  );
}

export default NoteCard;
