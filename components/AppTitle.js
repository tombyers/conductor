import Head from 'next/head'
import { appName } from './OnBeat'

const AppTitle = props => {
  const { isPlaying, bpm } = props

  return (
    <Head>
      <title>
        { isPlaying ?
          `🎶 ${appName} (${bpm}bpm)` :
          `🎶 ${appName}` 
        }
      </title>
    </Head>
  )
}

export default AppTitle
