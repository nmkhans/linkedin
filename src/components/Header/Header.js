import React from 'react';
import logo from './logo.png';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from '../HeaderOption/HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__logo">
                    <a href="/home">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search here" />
                </div>
            </div>

            <div className="header__Right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption avatar="https://i.ibb.co/60Vmk5x/Moin.jpg" title='Me' />
            </div>
        </div>
    );
};

export default Header;