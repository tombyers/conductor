import React, { useState, useEffect, useRef } from 'react'
import styles from './TempoSelector.module.css'

const itemWidth = 140

const listStyles = {
  listStyle: 'none',
  display: 'flex',
  fontSize: 60,
  fontFamily: 'helvetica',
  overflowY: "scroll",
  scrollSnapType: "x proximity",
  paddingLeft: `calc(50vw - ${itemWidth / 2}px)`
}

const listItemStyles = {
  minWidth: itemWidth - 24,
  textAlign: 'center',
  marginRight: 24,
  scrollSnapAlign: "center",
  colour: '#04153F'
}

const TempoSelector = ({ setTempo }) => {
  const container = useRef()
  const [ scrollX, setScrollX ] = useState(0)
  const [ highlightIndex, setHighlightIndex ] = useState(0)
  const range = [...Array(211).keys()].map(n => n + 30)

  useEffect(() => {
    const highlightIndex = Math.round(Math.round(scrollX / itemWidth))
    setHighlightIndex(highlightIndex)
    setTempo(range[highlightIndex])
  }, [scrollX])

  useEffect(() => {
    container.current.scrollLeft = 12600
  }, [])

  return (
    <div>
      <div style={listStyles} onScroll={e => setScrollX(e.target.scrollLeft)} ref={container}>
        {range.map((n, i) => (
          <div key={i} style={listItemStyles} className={i === highlightIndex ? styles.highlighted : null}>{n}</div>
        ))}
      </div>
    </div>
  )
}

export default TempoSelector
