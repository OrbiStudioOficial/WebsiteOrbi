import * as S from './styles'
import { Container } from 'components/Container'
import Card from 'components/Card'

export type SimplePresentationCardInfoProps = {
  id: string
  title: string
  description: string
  img: string
  slug: string
  buttonTitle: string
  singularExtLink: string
}

export type SimplePresentationCardProps = {
  items: SimplePresentationCardInfoProps[]
  title: string
  description: string
  extLink: string
  extTitle: string
}

const SimplePresentationCard = ({
  items,
  title,
  description,
  extLink,
  extTitle
}: SimplePresentationCardProps) => (
  <Container>
    <S.Wrapper>
      <S.TitleWrapper>
        {!!title && <S.Title>{title}</S.Title>}
        {!!extTitle && <S.ExtLink href={extLink}>{extTitle}</S.ExtLink>}
      </S.TitleWrapper>
      {!!description && (
        <S.TitleWrapper>
          <S.PresentationDescription>{description}</S.PresentationDescription>
        </S.TitleWrapper>
      )}

      <S.Content>
        {items.map((item) => (
          <>
            <Card
              img={item.img}
              description={item.description}
              title={item.title}
              buttonLink={item.slug}
              buttonTitle={item.buttonTitle}
              id={item.id}
              slug={item.slug}
              singularExtLink={item.singularExtLink}
            />
          </>
        ))}
      </S.Content>
    </S.Wrapper>
  </Container>
)

export default SimplePresentationCard
