import React, { useState } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';

import './App.css';

import background from './assets/background.jpg';

function App() {

    const [projects, setProjects] = useState(['Project 1', 'Project 2']);
    const [projectIndex, setProjectIndex] = useState(3);

    function handleAddProject() {
        //Imutability concept: you cannot update the variable, you must create again.
        setProjects([...projects, `Project ${projectIndex}`]);
        setProjectIndex(projectIndex => projectIndex + 1);
    }

    return (
        <>
            <Header title='Projects' />
            <img src={background} width={300}/>
            <ul>
                {projects.map(project => (
                    <li key={project}>{project}</li>
                ))}
            </ul>
            <button onClick={handleAddProject}>Add project</button>
        </>
    )
}

export default App;