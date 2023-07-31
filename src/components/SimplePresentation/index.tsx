import * as S from './styles'
import { Container } from 'components/Container'
import Button from 'components/Button'
import Link from 'next/link'

export type SimplePresentationInfoProps = {
  id: string
  category: string
  description: string
  img: string
  slug: string
  buttonTitle: string
  buttonLink: string
}

export type SimplePresentationProps = {
  items: SimplePresentationInfoProps[]
  description: string
  presentationTitle: string
  extLink: string
  extTitle: string
}

const SimplePresentation = ({
  items,
  description,
  presentationTitle,
  extLink,
  extTitle
}: SimplePresentationProps) => (
  <Container>
    <S.Wrapper>
      <S.TitleWrapper>
        {!!presentationTitle && <S.Title>{presentationTitle}</S.Title>}
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
            <S.Column>
              <S.ContentTitle>{item.category}</S.ContentTitle>
              <S.Hr />
              <S.Description>{item.description}</S.Description>
              <Link href={item.buttonLink}>
                <Button size="medium" key={item.id}>
                  {item.buttonTitle}
                </Button>
              </Link>
            </S.Column>
          </>
        ))}
      </S.Content>
    </S.Wrapper>
  </Container>
)

export default SimplePresentation
