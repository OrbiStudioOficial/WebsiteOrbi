import * as S from './styles'
import Base from 'templates/Base'
import { NextSeo } from 'next-seo'

import About from 'components/About/About'

const AboutUs = () => {
  return (
    <Base>
      <NextSeo
        title="Orbi | Sobre"
        description="A Casa de Placas é uma empresa que realiza serviços especializados em estampagem, distribuição e comercialização de placas automotivas, sendo credenciada pelo DETRAN/PR."
        canonical="https://casadeplacas.com.br/sobre"
        openGraph={{
          url: 'https://casadeplacas.com.br/sobre',
          title: 'Casa de Placas | Sobre',
          description:
            'A Casa de Placas é uma empresa que realiza serviços especializados em estampagem, distribuição e comercialização de placas automotivas, sendo credenciada pelo DETRAN/PR.',
          images: [
            {
              url: 'https://casadeplacas.com.br/img/logoplacas.jpg',
              width: 1280,
              height: 720,
              alt: 'Casa de Placas'
            }
          ],
          site_name: 'Casa de Placas'
        }}
      />
      <S.SectionIntro>
        <About />
      </S.SectionIntro>
    </Base>
  )
}

export default AboutUs
