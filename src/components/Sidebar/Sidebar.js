import React from 'react';
import {Avatar} from '@mui/material';
import './Sidebar.css';

const Sidebar = () => {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={`https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`} alt="" />
                <Avatar className="sidebar__avatar" src="https://i.ibb.co/60Vmk5x/Moin.jpg" />
                <h2>Moin Khan</h2>
                <h4>nurmoin05@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('react.js')}
                {recentItem('MogoDB')}
                {recentItem('Node.js')}
                {recentItem('Express.js')}
            </div>
        </div>
    );
};

export default Sidebar;