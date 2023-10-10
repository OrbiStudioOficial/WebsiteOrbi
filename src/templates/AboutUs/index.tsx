import * as S from './styles'
import Base from 'templates/Base'
import { NextSeo } from 'next-seo'

import About from 'components/About/About'

const AboutUs = () => {
  return (
    <Base>
      <NextSeo
        title="Orbi | Sobre"
        description="A empresa Orbi é referência no setor de renderização 3D onde a dedicação é produzir imagens realistas de alto nível."
        canonical="https://orbi.com.br/sobre"
        openGraph={{
          url: 'https://orbi.com.br/sobre',
          title: 'Orbi | Sobre',
          description:
            'A empresa Orbi é referência no setor de renderização 3D onde a dedicação é produzir imagens realistas de alto nível.',
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
        <About />
      </S.SectionIntro>
    </Base>
  )
}

export default AboutUs
