import * as S from './styles'
import Base from 'templates/Base'

import Services from 'components/Services'
import { NextSeo } from 'next-seo'

const Servicos = () => {
  return (
    <Base>
      <NextSeo
        title="Orbi | servicos"
        description="Produtos personalizados de acordo com a sua necessidade."
        canonical="https://casadeplacas.com.br/produtos"
        openGraph={{
          url: 'https://casadeplacas.com.br/produtos',
          title: 'Casa de Placas | Produtos',
          description:
            'Produtos personalizados de acordo com a sua necessidade.',
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
      <>
        <S.Container>
          <Services />
        </S.Container>
      </>
    </Base>
  )
}

export default Servicos
