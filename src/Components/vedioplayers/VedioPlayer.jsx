import React from 'react'
import './VedioPlayer.css'
import video from '../../assets/intro-viedo.mp4'

const VedioPlayer = (  {playState, setPlayState}) => {

  const player = useRef(null);
  const closePlayer = (e) => {
    if(e.target === player.current){
        setPlayState(false);
    }
  }
  return (
    <div className= {`vedio-player ${playState? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video}></video>
    </div>
  )
}

export default VedioPlayer
