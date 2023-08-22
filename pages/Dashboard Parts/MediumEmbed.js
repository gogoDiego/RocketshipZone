import React from 'react';
import Iframe from 'react-iframe';




const MediumEmbed = () => {
    const articleUrl = 'https://medium.com/@JunoNetwork/pioneering-continues-a-status-update-on-the-upcoming-upgrade-invictus-29ce631cf99f';
  
    return (
      <div>
        <Iframe
          url={articleUrl}
          width="500px"
          height="280px"
          frameborder="0"
          allowfullscreen
        />
      </div>
    );
  };
  
  export default MediumEmbed;