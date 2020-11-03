import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';

function App() {
    return (
        <>
            <Header title='Home'>
                <ul>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Logout</li>
                </ul>
            </Header>
            <Header title='Projects'>
                <ul>
                    <li>New</li>
                    <li>Upload</li>
                </ul>
            </Header>
        </>
    )
}

export default App;