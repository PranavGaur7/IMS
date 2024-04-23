import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    // State to manage the list of notes
    const [notes, setNotes] = useState([
        '19-Apr-2024 is holiday from the owner due to Election',
        'Message from Manager*******',
        'Inventory Overflow alert',
        'Inventory Refil reminder set for 10-may-2024',
        'Production Status Report submittion',
    ]);

    const [newNote, setNewNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newNote.trim() !== '') {
            setNotes([...notes, newNote]);
            setNewNote('');
        }
    };

    return (
        <>
            <header>
                <nav>
                    <h1 style={{ fontSize: '25px' }}>Industrial Management System</h1>
                    <div>
                        <button className="login-btn" style={{ margin: '10px' }}><Link to='/Inventory'>Inventory</Link></button>
                        <button className="login-btn" style={{ margin: '10px', color: 'white' }}><Link to='/Chat'>Message</Link></button>
                        <button className="login-btn" style={{ margin: '10px' }}><Link to='/Bills'>Bills</Link></button>
                    </div>
                </nav>
            </header>
            <section>
                <div className="sidebar w-4/5 shadow-sm shadow-black p-10 my-10 rounded-lg mx-[30px]" style={{ backgroundColor: '#f0f0f0' }}>
                    <h3 style={{ fontSize: '50px' }}>Spotlight</h3>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type="text"
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            placeholder="Enter new note"
                            className="w-[300px] bg-gray-200 rounded-lg py-2 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                            style={{ marginRight: '10px' }}
                        />
                        <button type="submit" className="login-btn" style={{ margin: '10px' }}>Add Note</button>
                    </form>
                    <ul>
                        {notes.map((note, index) => (
                            <li key={index}>
                                <Link to={`/details/${index}`} className='shadow-sm shadow-black p-5 rounded-lg mx-[10px]'> {note}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}
