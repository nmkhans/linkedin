import React from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOpntion from '../InputOption/InputOpntion';
import Post from './../Post/Post';

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

            {/* Posts */}
            <Post 
            name="Moin Khan"
            description="This is amazing"
            message="This is my message"/>
        </div>
    );
};

export default Feed;