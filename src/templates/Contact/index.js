import Base from 'templates/Base'
import * as S from './styles'
import { NextSeo } from 'next-seo'
import Contact from 'components/Home/ContactTwo'

const Contato = () => {
  return (
    <>
      <NextSeo
        title="Orbi | Contato"
        description="Entre em contato para mais informações referente a render 3D."
        canonical=""
        openGraph={{
          url: '',
          title: 'Orbi | Contato',
          description:
            'Entre em contato para mais informações referente a render 3D.',
          images: [
            {
              url: '',
              width: 1280,
              height: 720,
              alt: 'Orbi'
            }
          ],
          site_name: 'Orbi'
        }}
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
