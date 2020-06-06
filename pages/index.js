import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Tone, { Synth } from 'tone'

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


const Conductor = () => {
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
      <h1 style={h1Style}>Conductor</h1>
      <motion.div style={batonStyles} initial="playing" animate={ isPlaying ? "playing" : "paused" } variants={variants}></motion.div>
      <button onClick={triggerSynth}>{ isPlaying ? "stop" : 'start'}</button>
      <input type="number" value={bpm} onChange={e => setBpm(e.target.value)} />
    </main>
  )
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Conductor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Conductor />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background-color: #111111;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
