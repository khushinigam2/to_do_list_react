import Note from './Note'
import Add from './Add'

const NotesList=({notes,handleAdd,handledeleteNote})=>{
    return (<div className="notes-list">
            {
            notes.map((note)=>(<Note id={note.id} text={note.text} date={note.date}
               handledeleteNote={handledeleteNote} 
            />))
            }
            <Add handleAdd={handleAdd}/>
    </div>
    );
};
export default NotesList;