import { motion } from 'framer-motion'

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

const Baton = props => {
  const { isPlaying } = props

  return (
    <motion.div style={batonStyles} animate={ isPlaying ? "playing" : "paused" } variants={variants}></motion.div>
  )
}

export default Baton
