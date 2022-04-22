import { useState } from "react";

const Add=({handleAdd})=>{
    const [noteText,setNoteText]=useState('');
    const characterLimit=250;
    const handleChange=(event)=>{
       // console.log(event.target.value);
       if(characterLimit-event.target.value.length>=0) {
            setNoteText(event.target.value);
        }
        };
    const handleSaveClick=()=>{
        if(noteText.trim().length>0){
            handleAdd(noteText);
            setNoteText('');
        }

    };
    return(
        <div className="note new">
        <textarea rows="8" cols="10"
         placeholder="Add a new note..."
         value={noteText}
         onChange={handleChange}
        ></textarea>
        <div className="Footer">
            <small>{characterLimit-noteText.length} Remaining</small>
             <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
        </div>
    );
};

export default Add;