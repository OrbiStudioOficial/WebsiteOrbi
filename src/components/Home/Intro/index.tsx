import Link from 'next/link'
import * as S from './styles'
import { Container } from 'components/Container'
import Button from 'components/Button'

const Intro = () => {
  return (
    <Container>
      <S.SectionIntro>
        <S.Background src="/img/background.png" />
        <S.Content>
          <S.Intro>
            <img src="/img/logo.png"></img>
            <S.Divider />
            <S.Phrase2>
              A Casa de Placas é uma empresa que realiza serviços especializados
              em estampagem, distribuição e comercialização de placas
              automotivas, sendo credenciada pelo DETRAN/PR e DETRAN/SC.
            </S.Phrase2>
            <Link href="/contato" passHref>
              <Button size="medium">entrar em contato</Button>
            </Link>
          </S.Intro>
        </S.Content>
      </S.SectionIntro>
    </Container>
  )
}

export default Intro
