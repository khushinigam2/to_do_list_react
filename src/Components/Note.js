import {MdDeleteForever, MDeleteForever} from 'react-icons/md';
const Note=({id, text, date, handledeleteNote})=>{
    return(
        <div className="note">
            <span>{text}</span>
            <div className="Footer">
                <small>{date}</small>
                <MdDeleteForever onClick={()=>handledeleteNote(id)} className='delete-icon' size='1.3em' />
            </div>
        </div>
        );
};
export default Note;
