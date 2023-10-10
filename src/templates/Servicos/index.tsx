import * as S from './styles'
import Base from 'templates/Base'

import Services from 'components/Services'
import { NextSeo } from 'next-seo'

const Servicos = () => {
  return (
    <Base>
      <NextSeo
        title="Orbi | Serviços"
        description="Saiba mais sobre como a Orbi trabalha em diversas etapas de um projeto."
        canonical="https://orbi.com.br/servicos"
        openGraph={{
          url: 'https://orbi.com.br/servicos',
          title: 'Orbi Studio | Serviços',
          description:
            'Saiba mais sobre como a Orbi trabalha em diversas etapas de um projeto.',
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
      <>
        <S.Container>
          <Services />
        </S.Container>
      </>
    </Base>
  )
}

export default Servicos
