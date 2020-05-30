import Head from 'next/head'
import { motion } from 'framer-motion'

const batonStyles = {
  height: 48,
  width: 48,
  backgroundColor: 'rgba(0,0,0,1)',
  position: 'relative',
  top: 0
}

const batonAnimation = {
  backgroundColor: ['rgb(255,0,0)', 'rgb(0,0,0)', 'rgb(0,0,0)', 'rgb(0,0,0)', 'rgb(255,0,0)'],
  x: [0, 100, -100, 0, 0],
  y: [0,  0, 0, -100, 0],
  transition: {
    loop: Infinity,
    duration: 2,
    ease: [.6,.05,.67,1.12]
  }
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Conductor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Conductor
        </h1>
        <motion.div style={batonStyles} animate={batonAnimation}></motion.div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
          padding-bottom: 8rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
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
