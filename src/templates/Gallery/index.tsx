import React from 'react'
import * as S from './styles'
import Base from 'templates/Base'
import Gallery from 'components/Gallery'
import { NextSeo } from 'next-seo'

const GalleryTemplate = () => {
  return (
    <>
      <Base>
        <NextSeo
          title="Orbi | Galeria"
          description="Veja os principais projetos de renderização da Orbi."
          canonical="https://orbi.com.br/galeria"
          openGraph={{
            url: 'https://orbi.com.br/galeria',
            title: 'Orbi Studio | Galeria',
            description: 'Veja os principais projetos de renderização da Orbi.',
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
        <S.SectionIntro>
          <Gallery />
        </S.SectionIntro>
      </Base>
    </>
  )
}

export default GalleryTemplate
