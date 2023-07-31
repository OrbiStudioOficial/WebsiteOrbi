import * as S from './styles'
import Base from 'templates/Base'

import { NextSeo } from 'next-seo'

import PresentationCard, {
  PresentationCardInfoProps
} from 'components/PresentationCard'
import Button from 'components/Button'
import Link from 'next/link'
import { Container } from 'components/Container'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import MediaMatch from 'components/MediaMatch'

export type DetailsProps = {
  id: string
  item: string
}

export type ProductTemplateProps = {
  pageTitle: string
  title: string
  description: string
  details: DetailsProps[]
  slug: string
  gallery: GalleryImageProps[]
  products: PresentationCardInfoProps[]
  presentationCardDescription: string
  presentationCardTitle: string
  getInTouchTitle: string
  getInTouchDescription: string
  cover: string
}

const ProductTemplate = ({
  pageTitle = '01. PRODUTO',
  title,
  description,
  details,
  slug,
  products,
  presentationCardTitle = '02. MAIS PRODUTOS',
  presentationCardDescription = '',
  gallery,
  cover
}: ProductTemplateProps) => {
  const link =
    'https://api.whatsapp.com/send?phone=554136342110&text=Gostaria%20de%20comprar%20este%20produto%20:%20https://casadeplacas.com.br/produto/'
  return (
    <Base>
      <NextSeo
        title={`${title} - Casa de Placas`}
        description={description}
        canonical={`https://casadeplacas.com.br/produto/${slug}`}
        openGraph={{
          url: `https://casadeplacas.com.br/produto/${slug}`,
          title: `${title} - Casa de Placas`,
          description: description,
          images: [
            {
              url: cover,
              alt: `${title}`
            }
          ]
        }}
      />
      <Container>
        <S.SectionDetails>
          <S.Title>{pageTitle}</S.Title>
          <S.Phrase1>{title}</S.Phrase1>
          <S.Content>
            <S.Column>
              <S.Phrase2>{description}</S.Phrase2>
              <S.Hr />
              {details.map((i) => (
                <S.Item key={i.id}>{i.item}</S.Item>
              ))}
              <MediaMatch greaterThan="medium">
                <Link href={`${link}/${slug}`} passHref>
                  <Button size="large">DESEJO ESTE PRODUTO</Button>
                </Link>
              </MediaMatch>
              <MediaMatch lessThan="medium">
                <Link href={`${link}/${slug}`} passHref>
                  <Button size="small" style={{ width: '25rem' }}>
                    DESEJO ESTE PRODUTO
                  </Button>
                </Link>
              </MediaMatch>
            </S.Column>
            <S.Column>{!!gallery && <Gallery items={gallery} />}</S.Column>
          </S.Content>
        </S.SectionDetails>
      </Container>
      <S.SectionPresentation>
        <PresentationCard
          id="1"
          items={products}
          title={presentationCardTitle}
          description={presentationCardDescription}
        />
      </S.SectionPresentation>
    </Base>
  )
}

export default ProductTemplate
