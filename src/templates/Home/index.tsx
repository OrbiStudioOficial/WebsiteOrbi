import React from 'react'
import Base from 'templates/Base'
import Intro from 'components/Home/Intro'
import About from 'components/Home/About'
import Services from 'components/Home/Services'
import Contact from 'components/Home/Contact'

import { NextSeo } from 'next-seo'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

import { useEffect, useState } from 'react'

import Loading from 'components/Loading'

const Home = () => {
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  //     navigator.serviceWorker
  //       .register('/service-worker.js')
  //       .then((registration) => {
  //         console.log('Service Worker registrado com sucesso:', registration)
  //       })
  //       .catch((error) => {
  //         console.error('Erro ao registrar o Service Worker:', error)
  //       })
  //   }
  // }, [])

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited')
    if (hasVisited) {
      setLoading(false)
    } else {
      localStorage.setItem('hasVisited', true.toString())
      const timer = setTimeout(() => {
        setLoading(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Base>
            <NextSeo
              title="Orbi"
              description="A Orbi realiza serviços no setor de modelagem 3D e renderização 3D."
              canonical="https://orbi.com.br"
              openGraph={{
                url: 'https://orbi.com.br',
                title: 'Orbi',
                description:
                  'A Orbi realiza serviços no setor de modelagem 3D e renderização 3D.',
                images: [
                  {
                    url: 'https://orbi.com/img/logoorbi.png',
                    width: 1280,
                    height: 720,
                    alt: 'Orbi'
                  }
                ],
                site_name: 'Orbi'
              }}
            />
            <FloatingWhatsApp
              phoneNumber="556692152256"
              accountName="Orbi Studio"
              chatMessage="Precisa realizar um orçamento?"
              statusMessage="BE AN ASTRONAUT"
              placeholder="Olá, preciso realizar um orçamento!"
              avatar="/img/ORBI-512.png"
              allowEsc
              allowClickAway
              notification={true}
              notificationSound={true}
              notificationSoundSrc="/img/soundorbi.mp3"
            />
            <Intro />
            <About />
            <Services />
            <Contact />
          </Base>
        </>
      )}
    </>
  )
}

export default Home
