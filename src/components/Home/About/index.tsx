import Link from 'next/link'
import * as S from './styles'
import { Container } from 'components/Container'
import Button from 'components/Button'

const About = () => {
  return (
    <Container>
      <S.SectionAbout>
        <S.Title>01. SOBRE NÓS</S.Title>
        <S.Phrase1>
          Há mais de 10 anos facilitando o emplacamento do seu veículo
        </S.Phrase1>
        <S.Content>
          <S.Column>
            <S.AboutImage src="/img/logo.png" />
          </S.Column>
          <S.Column>
            <S.Phrase2>
              A Casa de Placas é uma empresa que realiza serviços especializados
              em estampagem, distribuição e comercialização de placas
              automotivas, sendo credenciada pelo DETRAN/PR e DETRAN/SC.
            </S.Phrase2>
            <S.ItemWrapper>
              <span />
              <S.ItemHeader>
                +25 <p>anos</p>
              </S.ItemHeader>
              <S.Item>
                De experiência no mercado de emplacamento de veículos.
              </S.Item>
            </S.ItemWrapper>
            <S.ItemWrapper>
              <span />
              <S.ItemHeader>
                +50 mil <p>emplacamentos</p>
              </S.ItemHeader>
              <S.Item>
                Temos a experiência necessária para lhe oferecer o melhor
                atendimento e serviço.
              </S.Item>
            </S.ItemWrapper>
            <Link href="/sobre" passHref>
              <Button size="small">sobre nós</Button>
            </Link>
          </S.Column>
        </S.Content>
      </S.SectionAbout>
    </Container>
  )
}

export default About
