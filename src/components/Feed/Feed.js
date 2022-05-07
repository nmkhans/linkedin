import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import './Feed.css';
import InputOpntion from '../InputOption/InputOpntion';

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text" placeholder="Start a Post" />
                    <button type="submit">Send</button>
                </form>
                </div>
                <div className="feed__inputOption">
                    <InputOpntion Icon={ImageIcon} title='Photo' color="#70B5FC" />
                    <InputOpntion Icon={SubscriptionIcon} title='Video' color="#E7A33E" />
                    <InputOpntion Icon={EventNoteIcon} title='Event' color="#C0CbCd" />
                    <InputOpntion Icon={CalendarViewDayIcon} title='Write article' color="#7FC15E" />
                </div>
            </div>

            {/*  */}
        </div>
    );
};

export default Feed;