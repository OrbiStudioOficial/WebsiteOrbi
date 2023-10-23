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
              title="Orbi | Início"
              description="Conheça sobre a empresa Orbi Studio, referência em renderizações 3D de ponta."
              canonical="https://orbi.com.br/"
              openGraph={{
                url: 'https://orbi.com.br/',
                title: 'Orbi Studio | Início',
                description:
                  'Conheça sobre a empresa Orbi Studio, referência em renderizações 3D de ponta.',
                images: [
                  {
                    url: 'https://orbi.com.br/img/ORBI-512.png',
                    width: 1280,
                    height: 720,
                    alt: 'Orbio Studio'
                  }
                ],
                site_name: 'Orbio Studio'
              }}
              additionalMetaTags={[
                {
                  name: 'Orbi Studio',
                  content: 'Orbi Studio'
                },
                {
                  name: 'Orbi, Orbi Studio, Orbi 3D',
                  content:
                    'Orbi Studio, Orbi, Renderização 3D, Projetos Arquitetônicos'
                }
              ]}
              noindex={false}
              nofollow={false}
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
