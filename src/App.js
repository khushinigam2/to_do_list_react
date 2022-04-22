import{nanoid} from 'nanoid';
import { useEffect, useState } from 'react';
import NotesList from './Components/NotesList';
import Search from './Components/Search';
import Header from './Components/Header';
const App=() =>{
  const[notes, setNotes]=useState([
  
]);
const [searchText, setSearchText] =useState('');
const [darkMode, setDarkMode]=useState(false);

useEffect(()=>{
  const savedNotes=JSON.parse(localStorage.getItem('knotes-app-data'));
  if(savedNotes){
    setNotes(savedNotes);
  }
},[])

useEffect(()=>{
 localStorage.setItem('knotes-app-data',JSON.stringify(notes));
},[notes])

const addNote=(text)=>{
     //console.log(text);
     const date=new Date();
     const newNote={
      id:nanoid(), 
      text :text,
       date:date.toLocaleDateString()
     }
     const newNotes=[...notes,newNote];
     setNotes(newNotes);
}
const deleteNote=(id)=>{
  const newNotes=notes.filter((note)=> note.id!==id);
  setNotes(newNotes);
}
  return(
       <div className={`${darkMode && 'dark-mode'}`}>
         <div className="container">
          <Header handleDarkMode={setDarkMode}/>
          <Search handleSearchNote={setSearchText}/>
          <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
             handleAdd={addNote} handledeleteNote={deleteNote}/>
           </div>
        </div>
       
      )
};

export default App;
 