import * as S from './styles'
import { Container } from 'components/Container'

export type ImageProps = {
  url: string
}

export type WhoIsUsProps = {
  title: string
  description: string
  phrase1: string
  phrase2: string
  phrase3: string
  images: ImageProps[]
}

const WhoIsUs = ({
  title,
  description,
  phrase1,
  phrase2,
  phrase3,
  images
}: WhoIsUsProps) => (
  <Container>
    <S.Wrapper>
      {!!title && (
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>
        </S.TitleWrapper>
      )}
      {!!description && (
        <S.TitleWrapper>
          <S.PresentationDescription>{description}</S.PresentationDescription>
        </S.TitleWrapper>
      )}
      {!!images && (
        <S.Content>
          {images.map((image) => (
            <>
              <S.Column>
                <S.Image src={image.url} />
              </S.Column>
            </>
          ))}
        </S.Content>
      )}
      <S.Content>
        <S.Column>
          <span />
        </S.Column>
        <S.Column>
          <p>{!!phrase1 && <strong>{phrase1}</strong>}</p>
          <p>{!!phrase2 && <strong>{phrase2}</strong>}</p>
          <p>{!!phrase3 && <strong>{phrase3}</strong>}</p>
        </S.Column>
      </S.Content>
    </S.Wrapper>
  </Container>
)

export default WhoIsUs
