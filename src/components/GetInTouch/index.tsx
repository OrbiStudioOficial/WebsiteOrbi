import * as S from './styles'
import Link from 'next/link'
import Button from 'components/Button'
import { Container } from 'components/Container'

export type GetInTouchProps = {
  title: string
  description: string
}

const GetInTouch = ({ title, description }: GetInTouchProps) => (
  <Container>
    <S.Wrapper>
      <S.GetInTouchTitle>{title}</S.GetInTouchTitle>
      <S.GetInTouchDescription>{description}</S.GetInTouchDescription>
      <Link href="/contato">
        <Button size="medium">entrar em contato</Button>
      </Link>
    </S.Wrapper>
  </Container>
)

export default GetInTouch
