import Base from 'templates/Base'
import * as S from './styles'
import { NextSeo } from 'next-seo'
import Contact from 'components/Home/ContactTwo'

const Contato = () => {
  return (
    <>
      <NextSeo
        title="Orbi | Contato"
        description="Entre em contato para realizar um orçamento ou saber mais informações sobre a empresa Orbi"
        canonical="https://orbi3d.com/contato"
        openGraph={{
          url: 'https://orbi3d.com/contato',
          title: 'Orbi Studio | Contato',
          description:
            'Entre em contato para realizar um orçamento ou saber mais informações sobre a empresa Orbi',
          images: [
            {
              url: 'https://orbi3d.com/img/ORBI-512.png',
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
      <Base>
        <S.Container>
          <Contact />
        </S.Container>
      </Base>
    </>
  )
}

export default Contato
