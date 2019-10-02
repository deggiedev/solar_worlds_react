import React from "react";
import ReactDOM from "react-dom";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from "react-twitter-embed";
import { Card, Container, Segment, Header, Divider } from "semantic-ui-react";


function Twitter() {
  return (
    <div className="Twitter">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="NASA"
        options={{ height: 300, width: 400 }}
      />
    </div>
  );
}


export default Twitter