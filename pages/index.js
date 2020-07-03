import Head from 'next/head'
import OnBeat from '../components/OnBeat'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" rel="stylesheet" /> 
        <script src="https://unpkg.com/unmute" data-add-button="true"></script>
      </Head>

      <Logo />
      <OnBeat />
    </div>
  )
}
