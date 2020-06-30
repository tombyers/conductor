import Head from 'next/head'
import OnBeat from '../components/OnBeat'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <OnBeat />
    </div>
  )
}
