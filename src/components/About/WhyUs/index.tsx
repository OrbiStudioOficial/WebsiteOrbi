import * as S from './styles'
import { Container } from 'components/Container'

export type WhyUsItemProps = {
  id: string
  number: string
  description: string
}

export type WhyUsProps = {
  title: string
  description: string
  items: WhyUsItemProps[]
}

const WhyUs = ({ title, description, items }: WhyUsProps) => (
  <Container>
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>{title}</S.Title>
      </S.TitleWrapper>
      {!!description && (
        <S.TitleWrapper>
          <S.WhyUsDescription>{description}</S.WhyUsDescription>
        </S.TitleWrapper>
      )}
      <S.Content>
        <S.Column>
          <span />
        </S.Column>
        <S.Column>
          <S.Content>
            {items.map((item) => (
              <>
                <S.Column>
                  <p>
                    <strong>
                      {item.number}. {item.description}
                    </strong>
                  </p>
                </S.Column>
              </>
            ))}
          </S.Content>
        </S.Column>
      </S.Content>
    </S.Wrapper>
  </Container>
)

export default WhyUs
