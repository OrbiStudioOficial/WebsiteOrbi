import * as S from './styles'
import Base from 'templates/Base'

import { Container } from 'components/Container'
import SimplePresentationCard, {
  SimplePresentationCardInfoProps
} from 'components/SimplePresentationCard'
import GetInTouch from 'components/GetInTouch'
import ShareSocials from 'components/ShareSocials'
import { NextSeo } from 'next-seo'

export type AnnouncementCategoryProps = {
  title: string
  id: string
}

export type AnnouncementTemplateProps = {
  pageTitle: string
  simplePresentationCardTitle: string
  simplePresentationCardDescription: string
  presentationCard: SimplePresentationCardInfoProps[]
  presentationCardTitle: string
  getInTouchTitle: string
  getInTouchDescription: string
  title: string
  data: string
  categoria: AnnouncementCategoryProps[]
  slug: string
  image: string
  content: string
}

const AnnouncementTemplate = ({
  pageTitle = '01. COMUNICADO',
  title,
  data,
  categoria,
  slug,
  image,
  content,
  presentationCard,
  simplePresentationCardTitle = '02. MAIS COMUNICADOS',
  simplePresentationCardDescription = '',
  getInTouchTitle = '03. ENTRE EM CONTATO',
  getInTouchDescription = 'Converse com um de nossos atendentes para tirar as suas dúvidas.'
}: AnnouncementTemplateProps) => {
  return (
    <>
      <Base>
        <NextSeo
          title={`${title} - Casa de Placas`}
          canonical={`https://casadeplacas.com.br/produto/${slug}`}
          openGraph={{
            url: `https://casadeplacas.com.br/produto/${slug}`,
            title: `${title} - Casa de Placas`,
            images: [
              {
                url: image,
                alt: `${title}`
              }
            ]
          }}
        />
        <Container>
          <S.Title>{pageTitle}</S.Title>
          <S.Phrase1>{title}</S.Phrase1>
          <S.Content>
            <S.Column>
              <S.Heading>DATA</S.Heading>
              <S.Links>
                <p>{data}</p>
              </S.Links>
            </S.Column>
            <S.Column>
              <S.Heading>CATEGORIA</S.Heading>
              {categoria.map((cat) => (
                <>
                  <S.Links>
                    <p>{cat.title}</p>
                  </S.Links>
                </>
              ))}
            </S.Column>
            <S.Column>
              <S.Heading>COMPARTILHE EM:</S.Heading>
              <ShareSocials slug={slug} />
            </S.Column>
          </S.Content>
        </Container>
        <S.FullImage src={image} />
        <Container>
          <S.ContentDiv>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </S.ContentDiv>
          <hr style={{ width: '100%' }} />
          <S.SectionPresentationCard>
            <SimplePresentationCard
              extTitle=""
              extLink=""
              items={presentationCard}
              title={simplePresentationCardTitle}
              description={simplePresentationCardDescription}
            />
          </S.SectionPresentationCard>
          <S.SectionGetInTouch>
            <GetInTouch
              title={getInTouchTitle}
              description={getInTouchDescription}
            />
          </S.SectionGetInTouch>
        </Container>
      </Base>
    </>
  )
}

export default AnnouncementTemplate
