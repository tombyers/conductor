import React, { useState, useEffect } from 'react'

import styles from './OnBeat.module.css'
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
        Tone.Transport.schedule(time => synth.triggerAttackRelease('C4', '8n', time), "0:0:0", "16n")
        Tone.Transport.schedule(time => synth.triggerAttackRelease('G4', '8n', time), "0:1:0", "16n")
        Tone.Transport.schedule(time => synth.triggerAttackRelease('E4', '8n', time), "0:2:0", "16n")
        Tone.Transport.schedule(time => synth.triggerAttackRelease('G4', '8n', time), "0:3:0", "16n")
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
      <main className={styles.container}>
        <PlayButton isPlaying={isPlaying} togglePlay={togglePlay} />
        <TempoSelector tempo={tempo} setTempo={setTempo} minTempo={30} maxTempo={300} />
      </main>
    )
  }

export default OnBeat
