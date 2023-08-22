import React, { useEffect } from 'react';

const TwitterEmbed = () => {
  useEffect(() => {
    // Load Twitter's widgets.js library to render the embedded tweet
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    document.head.appendChild(script);
  }, []);

  // Custom CSS rule to target the iframe and remove its margin
  const removeTweetMargin = `
    .tweet-container iframe {
      margin: 0 !important;
    }
  `;

  return (
    <div>
      <style>{removeTweetMargin}</style>
      <div
        className="tweet-container"
        style={{
          position: 'relative',
          width: '500px', 
          height: '280px',
          overflow: "hidden",
          padding: "0",
          margin: "0",
          marginTop: "-10px", // Move up the tweet by 10px
        }}
      >
        <blockquote
          className="twitter-tweet"
          data-lang="en"
          data-theme="dark" // Set "light" or "dark" theme as per your website's theme
          style={{
            width: '100%',
            height: '100%',
            overflow: "hidden",
            padding: "0",
            margin: "0",
          }}
        >
          <p lang="en" dir="ltr">
            <a href="https://twitter.com/Flowslikeosmo/status/1685290704896176128?s=20">
              Tweet Link
            </a>
          </p>
          &mdash; Twitter User (@Flowslikeosmo)
          <a href="https://twitter.com/Flowslikeosmo/status/1685290704896176128?s=20">
            February 18, 2023
          </a>
        </blockquote>
      </div>
    </div>
  );
};

export default TwitterEmbed;
