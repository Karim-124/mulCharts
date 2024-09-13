import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/pages">Pages</Link></li> {/* This will link to the SubPages component */}
            </ul>
        </div>
    );
};

export default Sidebar;
