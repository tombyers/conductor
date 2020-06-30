import React, { useState } from 'react'
import PlayButton from './PlayButton'
import TempoSelector from './TempoSelector'

// import Tone, { Synth } from 'tone'
// import AppTitle from './AppTitle'
// import Baton from './Baton'
// export const appName = "OnBeat"

const h1Style = {
  margin: 0,
  lineHeight: 1.15,
  fontSize: '4rem',
  textAlign: 'center',
  paddingBottom: '8rem',
  color: 'white'
}

const OnBeat = () => {
    const [ isPlaying, togglePlay ] = useState(false);
    
    // const [ bpm, setBpm ] = useState(120)
    // const synth = useRef()
    // const transport = useRef(Tone.Transport)
  
    // useEffect(() => {
    //   synth.current = new Synth().toMaster()
    //   transport.current.schedule(time => synth.current.triggerAttackRelease('C4', '8n', time), 0)
    //   transport.current.schedule(time => synth.current.triggerAttackRelease('G4', '8n', time), "0:2")
    //   transport.current.loop = false
    //   transport.current.loopEnd = '1m'
    // }, [])

    // useEffect(() => {
    //   transport.current.bpm.value = bpm
    // }, [bpm])

    // useEffect(() => {
    //   transport.current.toggle()
    // }, [isPlaying])
  
    return (
      <main>
        <PlayButton isPlaying={isPlaying} togglePlay={togglePlay} />
        <TempoSelector />
      </main>
    )
  }

export default OnBeat