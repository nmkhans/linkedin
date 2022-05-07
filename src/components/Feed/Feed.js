import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOpntion from '../InputOption/InputOpntion';
import Post from './../Post/Post';
import { database } from '../../firebase.init';
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const usersCollection = collection(database, 'posts');
    useEffect(() => {
        const getPost = async () => {
            const data = await getDocs(usersCollection)
            const myData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            setPosts(myData);
        }

        getPost();
    }, [usersCollection]);

    const handlePost = async (event) => {
        event.preventDefault();
        const message = event.target.message.value;
        // eslint-disable-next-line no-unused-vars
        const data = await setDoc(doc(usersCollection), {
            name: "Moin Khan",
            description: "Full stack Developer",
            message: message,
        })
        event.target.reset();
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form onSubmit={handlePost}>
                        <input type="text" name="message" placeholder="Start a Post" />
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
            {
                posts.map(post => (
                    <Post
                        key={post.id}
                        name={post.name}
                        description={post.description}
                        message={post.message} />
                ))
            }
        </div>
    );
};

export default Feed;