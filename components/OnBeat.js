import React, { useState, useEffect } from 'react'

import PlayButton from './PlayButton'
import TempoSelector from './TempoSelector'
import Tone, { Synth } from 'tone'
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
    const [ tempo, setTempo ] = useState(120) 

    useEffect(() => {
      if (isPlaying) {
        const synth = new Synth().toMaster()
        Tone.Transport.schedule(time => synth.triggerAttackRelease('C4', '16n', time), 0)
        Tone.Transport.loop = true
        Tone.Transport.loopEnd = '8n'
        Tone.Transport.bpm.value = tempo
        console.log(tempo)
        Tone.Transport.start()
      } else {
        Tone.Transport.loop = false
      }
    }, [isPlaying])

    useEffect(() => {
      Tone.Transport.bpm.value = tempo
      console.log(tempo)
    }, [tempo])
  
    return (
      <main>
        <PlayButton isPlaying={isPlaying} togglePlay={togglePlay} />
        <TempoSelector setTempo={setTempo} />
      </main>
    )
  }

export default OnBeat