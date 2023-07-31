import * as S from './styles'
import Base from 'templates/Base'

import GetInTouch from 'components/GetInTouch'
import PresentationCard, {
  PresentationCardInfoProps
} from 'components/PresentationCard'
import MediaMatch from 'components/MediaMatch'
import { NextSeo } from 'next-seo'

export type ProductsTemplateProps = {
  products: PresentationCardInfoProps[]
  presentationCardDescription: string
  presentationCardTitle: string
  getInTouchTitle: string
  getInTouchDescription: string
}

const ProductsTemplate = ({
  products,
  presentationCardTitle = '',
  presentationCardDescription = 'Produtos personalizados de acordo com a sua necessidade.',
  getInTouchTitle = '01. ENTRE EM CONTATO',
  getInTouchDescription = 'Converse com um de nossos atendentes para tirar as suas dúvidas.'
}: ProductsTemplateProps) => {
  return (
    <Base>
      <NextSeo
        title="Casa de Placas | Produtos"
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
      <MediaMatch lessThan="medium">
        <S.Heading>Produtos</S.Heading>
      </MediaMatch>
      <MediaMatch greaterThan="medium">
        <S.SectionIntro>
          <S.Content>
            <S.Intro>
              <S.Heading>Produtos</S.Heading>
            </S.Intro>
          </S.Content>
        </S.SectionIntro>
      </MediaMatch>
      <S.SectionPresentation>
        <PresentationCard
          title={presentationCardTitle}
          description={presentationCardDescription}
          items={products}
          id="1"
        />
      </S.SectionPresentation>
      <S.SectionGetInTouch>
        <GetInTouch
          title={getInTouchTitle}
          description={getInTouchDescription}
        />
      </S.SectionGetInTouch>
    </Base>
  )
}

export default ProductsTemplate
