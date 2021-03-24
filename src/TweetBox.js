import React, { useState } from 'react';
import './TweetBox.css';
import Izu from './img/izu_img.jpg';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Izuchukwu Onukwube',
            username: 'just4_eric',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 
            "https://firebasestorage.googleapis.com/v0/b/twitter-clone-84bf7.appspot.com/o/img%2Fizu_img.jpg?alt=media&token=fb15859b-e833-49cb-8059-675a09ecee04"
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src={Izu} />
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="What's happening" 
                        type="text" 
                    />
                </div>
                    <input 
                        onChange={(e) => setTweetImage(e.target.value)}
                        value={tweetImage}
                        className="tweetBox_imageInput" 
                        placeholder="Enter image URL" 
                        type="text" 
                    />

                <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
