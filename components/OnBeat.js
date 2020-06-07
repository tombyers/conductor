import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Tone, { Synth } from 'tone'
import AppTitle from './AppTitle'

export const appName = "OnBeat"

const batonStyles = {
  height: 48,
  width: 48,
  position: 'relative',
  backgroundColor: 'white',
  top: 0,
  borderRadius: 24,
  boxShadow: '0 0 12px 4px rgba(0,0,0,1)'
}

const variants = {
  playing: { 
    opacity: 1,
    x: [0, 100, -100, 0, 0],
    y: [0,  0, 0, -100, 0],
    transition: {
      loop: Infinity,
      duration: 2,
      ease: [.6,.05,.67,1.12]
    }
  },
  paused: { opacity: 0 }
}

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
  
    useEffect(() => {
      synth.current = new Synth().toMaster()
      Tone.Transport.schedule(time => synth.current.triggerAttackRelease('C4', '8n', time), 0)
      Tone.Transport.schedule(time => synth.current.triggerAttackRelease('G4', '8n', time), "0:2")
      Tone.Transport.loop = true
      Tone.Transport.loopEnd = '1m'
      Tone.Transport.bpm.value = bpm
    })
  
    const triggerSynth = () => {
      Tone.Transport.toggle()
      togglePlay(!isPlaying)
    }
  
    return (
      <main style={mainContent}>
        <AppTitle isPlaying={isPlaying} bpm={bpm} />
        <h1 style={h1Style}>{appName}</h1>
        <motion.div style={batonStyles} initial="playing" animate={ isPlaying ? "playing" : "paused" } variants={variants}></motion.div>
        <button onClick={triggerSynth}>{ isPlaying ? "stop" : 'start'}</button>
        <input type="number" value={bpm} onChange={e => setBpm(e.target.value)} />
      </main>
    )
  }

export default OnBeat