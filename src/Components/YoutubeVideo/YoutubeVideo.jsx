import React from 'react'
import './Youtube.css'
function YoutubeVideo() {
  return (
    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/k9GJCJ-f31Y?si=tHvHtjvwX9Nhheyz"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default YoutubeVideo
