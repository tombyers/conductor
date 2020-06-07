import { useState, useEffect, useRef } from 'react'
import Tone, { Synth } from 'tone'
import AppTitle from './AppTitle'
import Baton from './Baton'

export const appName = "OnBeat"

const h1Style = {
  margin: 0,
  lineHeight: 1.15,
  fontSize: '4rem',
  textAlign: 'center',
  paddingBottom: '8rem',
  color: 'white'
}

const mainContent = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}

const OnBeat = () => {
    const [ isPlaying, togglePlay ] = useState(false);
    const [ bpm, setBpm ] = useState(120)
    const synth = useRef()
    const transport = useRef(Tone.Transport)
  
    useEffect(() => {
      synth.current = new Synth().toMaster()
      transport.current.schedule(time => synth.current.triggerAttackRelease('C4', '8n', time), 0)
      transport.current.schedule(time => synth.current.triggerAttackRelease('G4', '8n', time), "0:2")
      transport.current.loop = true
      transport.current.loopEnd = '1m'
    }, [])

    useEffect(() => {
      transport.current.bpm.value = bpm
    }, [bpm])

    useEffect(() => {
      transport.current.toggle()
    }, [isPlaying])
  
    const handleTogglePlayButton = () => {
      togglePlay(!isPlaying)
    }
  
    return (
      <main style={mainContent}>
        <AppTitle isPlaying={isPlaying} bpm={bpm} />
        <h1 style={h1Style}>{appName}</h1>
        <Baton isPlaying={isPlaying} />
        <button onClick={handleTogglePlayButton}>{ isPlaying ? "stop" : 'start'}</button>
        <input type="number" value={bpm} onChange={e => setBpm(e.target.value)} />
      </main>
    )
  }

export default OnBeat