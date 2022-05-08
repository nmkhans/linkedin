import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InputOpntion from '../InputOption/InputOpntion';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { collection, updateDoc, doc } from 'firebase/firestore';
import { database } from '../../firebase.init';

const Post = ({ name, description, message, photoUrl, like, id }) => {

    const usersCollection = collection(database, 'posts');
    const docRef = doc(usersCollection, id);

    const handleLike = async () => {
        // eslint-disable-next-line no-unused-vars
        const update = await updateDoc(docRef, {
            like: like + 1,
        });
    }
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
                <span onClick={handleLike}>
                    <InputOpntion
                        Icon={ThumbUpOffAltIcon}
                        title="Like"
                        color="gray"
                        like={like} />
                </span>
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