import React, { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

import Header from '../components/Header'
import MoreInfo from '../components/MoreInfo';

function ProjectPage() {
    const { lightMode } = useContext(ThemeContext);

    return (
        <div className={` App content ${lightMode ? 'light-mode' : ''}`}>
            <Header />
            <MoreInfo />
        </div>
    );
}

export default ProjectPage