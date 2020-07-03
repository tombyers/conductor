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
        Tone.Transport.loopEnd = '1m'
        Tone.Transport.bpm.value = tempo
        Tone.Transport.loop = true
        Tone.Transport.start()
      } else {
        Tone.Transport.loop = false
        Tone.Transport.stop()
      }
    }, [isPlaying])

    useEffect(() => {
      console.log(tempo)
      Tone.Transport.bpm.value = tempo
    }, [tempo])
  
    return (
      <main>
        <PlayButton isPlaying={isPlaying} togglePlay={togglePlay} />
        <TempoSelector tempo={tempo} setTempo={setTempo} minTempo={30} maxTempo={300} />
      </main>
    )
  }

export default OnBeat
