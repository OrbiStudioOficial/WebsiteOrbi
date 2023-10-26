import Link from 'next/link'
import * as S from './styles'

export const Footer = () => {
  return (
    <>
      <S.Footer>
        <S.Wrapper>
          <div>
            <S.Title>Você tem um projeto?</S.Title>
            <S.Description>
              Conte conosco para tornar o seu projeto realista!
            </S.Description>
          </div>
          <Link href="mailto:comercial@orbi3d.com">
            <S.Button>Orçamento</S.Button>
          </Link>
        </S.Wrapper>
      </S.Footer>
    </>
  )
}

export default Footer
