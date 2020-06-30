import Head from 'next/head'
import OnBeat from '../components/OnBeat'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" rel="stylesheet" /> 
      </Head>

      <OnBeat />
    </div>
  )
}
