import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

function AddNote(props) {
    const context = useContext(noteContext);
    const { addNote } = context;


    const [note, setnote] = useState({ title: "", description: "", tag: "" })
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setnote({ title: "", description: "", tag: "" })
        props.showAlert("Updated Successfully ", "success")

    }

    const onChange = (e) => {

        setnote({ ...note, [e.target.name]: e.target.value })

    }
    return (

        <div className="container my-3">
            <h1>Add Notes</h1>

            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control border-primary" id="title" name='title' value={note.title} onChange={onChange} minLength={5} required />
                    <div id="emailHelp" className="form-text">Please provide value more than 5 letters</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="discription" className="form-label">Description</label>
                    <textarea type="text" className="form-control border-primary" id="description" name='description' rows="3" value={note.description} onChange={onChange} minLength={5} required />
                    <div id="emailHelp" className="form-text">Please provide value more than 5 letters</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control border-primary" id="tag" name='tag' onChange={onChange} value={note.tag} minLength={5} required />
                </div>

                <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Notes</button>
            </form>

        </div>
    )
}

export default AddNote
