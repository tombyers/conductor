import React, { useEffect, useRef } from 'react'
import range from 'lodash/range'
import styles from './index.module.css'
import smoothscroll from 'smoothscroll-polyfill'

const TempoSelector = (props) => {
  const {
    tempo,
    setTempo,
    minTempo,
    maxTempo
  } = props

  

  // this is the width of a tempo list item + its right margin
  const tempoListItemWidth = 132  
  const scrollWrapper = useRef()
  const tempoArray =  range(minTempo, maxTempo + 1, 1)

  const tempoToScrollLeft = tempo => (tempo - minTempo) * tempoListItemWidth
  const scrollLeftToTempo = scrollLeft => Math.round((scrollLeft / tempoListItemWidth) + minTempo)

  const handleTempoClick = (tempo) => {
    if (tempo && tempo < maxTempo + 1) {
      scrollWrapper.current.scrollTo({
        left: tempoToScrollLeft(tempo),
        behavior: "smooth"
      })
    } else {
      scrollWrapper.current.scrollTo({
        left: tempoToScrollLeft(maxTempo),
        behavior: "smooth"
      })
    }
  }
  
  useEffect(() => {
    scrollWrapper.current.scrollLeft = tempoToScrollLeft(tempo)
    // kick off the smoothscroll polyfill
    smoothscroll.polyfill()
  }, [])

  return (
    <div className={styles.wrapper}>
      <button className={`${styles.skipButton} ${styles.skipButtonLeft}`} onClick={e => handleTempoClick(tempo - 10)}>-10</button>
      <button className={`${styles.skipButton} ${styles.skipButtonRight}`} onClick={e => handleTempoClick(tempo + 10)}>+10</button>
      <ol 
        className={styles.tempoList}
        ref={scrollWrapper}
        onScroll={e => setTempo(scrollLeftToTempo(e.target.scrollLeft))}
        onClick={e => handleTempoClick(e.target.innerHTML)}
      >
        { tempoArray.map((item, index) => (
          <li key={index} className={styles.tempoListItem}>{item}</li>
        )) }
      </ol>
    </div>
  )
}

export default TempoSelector
