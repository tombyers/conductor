import React from 'react'

const PlayButton = ({ isPlaying, togglePlay }) => {
  if (isPlaying) {
    return <div onClick={() => togglePlay(!isPlaying)}>
      <svg xmlns="http://www.w3.org/2000/svg" height="96" viewBox="0 0 24 24" width="96"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z" fill="#04153F"/></svg>
    </div>
  }
  return <div onClick={() => togglePlay(!isPlaying)}>
    <svg xmlns="http://www.w3.org/2000/svg" height="96" viewBox="0 0 24 24" width="96"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="#04153F"/></svg>
  </div>
}

export default PlayButton
