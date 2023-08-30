import React from 'react';
import YouTube from 'react-youtube';

const YoutubeEmbed = () => {
  const videoId = 'NChffxHSWpY';

  // Calculate the aspect ratio of the video (16:9)
  // const aspectRatio = 9 / 16;

  // // Calculate the width based on the aspect ratio and the container's height
  // const containerHeight = 280; // Set the desired height of the video container
  // const width = containerHeight / aspectRatio;

  // // You can also add additional options to customize the player
  // const opts = {
  //   height: `${containerHeight}px`,
  //   width: `${width}px`,
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 0,
  //   },
  // };

  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    event.target.pauseVideo(); // For example, pause the video when it's ready
  };

  return <YouTube
            videoId={videoId}
            // opts={opts}
            onReady={onReady}
          />;
};

export default YoutubeEmbed;
