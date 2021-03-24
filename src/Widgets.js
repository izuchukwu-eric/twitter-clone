import React from 'react';
import './Widgets.css';
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets_widgetContainer">
                <h2>Whats happening</h2>

                <TwitterTweetEmbed tweetId={"858551177860055040"} />

                <TwitterTimelineEmbed 
                sourceType="profile" 
                screenName="just4_eric" 
                options={{ height: 400 }} 
                />

                <TwitterShareButton 
                url={"https://facebook.com/izuchukwueric"}
                options={{ text:"#reactjs is awesome", via: "just4_eric" }}
                />
            </div>
        </div>
    )
}

export default Widgets
