import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InputOpntion from '../InputOption/InputOpntion';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = ({name, description, message, photoUrl}) => {
    return (
        <div className="Post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOpntion
                Icon={ThumbUpOffAltIcon} 
                title="Like" 
                color="gray" />
                <InputOpntion
                Icon={ChatOutlinedIcon} 
                title="Comment" 
                color="gray" />
                <InputOpntion
                Icon={ShareOutlinedIcon} 
                title="Share" 
                color="gray" />
                <InputOpntion
                Icon={SendOutlinedIcon} 
                title="Send" 
                color="gray" />
            </div>
        </div>
    );
};

export default Post;