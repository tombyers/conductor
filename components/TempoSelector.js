import React, { useState, useEffect, useRef } from 'react'
import styles from './TempoSelector.module.css'

const itemWidth = 140

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
  const range = [...Array(211).keys()].map(n => n + 30)

  useEffect(() => {
    const selectedIndex = Math.round(Math.round(scrollX / itemWidth))
    setTempo(range[selectedIndex])
  }, [scrollX])

  useEffect(() => {
    container.current.scrollLeft = 12600
  }, [])

  return (
    <div>
      <div className={styles.container} onScroll={e => setScrollX(e.target.scrollLeft)} ref={container}>
        {range.map((n, i) => (
          <div key={i} style={listItemStyles} className={styles.listItem}>{n}</div>
        ))}
      </div>
    </div>
  )
}

export default TempoSelector
