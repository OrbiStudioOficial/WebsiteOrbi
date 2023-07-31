import * as S from './styles'
import Link from 'next/link'

export type CardProps = {
  img: string
  title: string
  description: string
  buttonLink: string
  buttonTitle: string
  id: string
  singularExtLink: string
  slug: string
}

const Card = ({
  img,
  title,
  description,
  buttonLink,
  buttonTitle,
  singularExtLink,
  slug
}: CardProps) => (
  <S.Wrapper>
    <S.Column>
      <S.Card>
        <S.Image src={img} />
        <S.Container>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardDescription>{description}</S.CardDescription>
          {/* singular ext link é por exemplo /comunicado /produto*/}
          {!!singularExtLink && (
            <>
              <Link href={`${singularExtLink}/${slug}`}>
                <S.DetailsButton>{buttonTitle}</S.DetailsButton>
              </Link>
            </>
          )}
          {/* caso não tenha um singular ext link apenas redireciona para outro link escolhido*/}
          {!singularExtLink && (
            <>
              <a href={`${buttonLink}`} target="_blank" rel="noreferrer">
                <S.DetailsButton>{buttonTitle}</S.DetailsButton>
              </a>
            </>
          )}
        </S.Container>
      </S.Card>
    </S.Column>
  </S.Wrapper>
)

export default Card
