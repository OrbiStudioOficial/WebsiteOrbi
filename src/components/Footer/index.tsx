import Link from 'next/link'
import * as S from './styles'
import Logo from 'components/Logo'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

const Footer = () => (
  <S.Wrapper>
    <S.Content>
      <MediaMatch lessThan="medium">
        <S.Column aria-labelledby="footer-contact">
          <Logo size="normal" />
        </S.Column>
      </MediaMatch>
      <MediaMatch greaterThan="medium">
        <S.Column aria-labelledby="footer-contact">
          <Logo color="white" size="normal" />
          <Button size="small" whiteButton>
            Entrar em contato
          </Button>
        </S.Column>
      </MediaMatch>
      <S.Column>
        <S.Heading>Localidades</S.Heading>
        <S.Links>
          <Link href="https://www.google.com/maps?q=Rua+Hayton+da+Silva+Pereira,+1325+-+Cap%C3%A3o+da+Imbuia,+Curitiba+-+PR,+82810-170&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiJlLqB2ar5AhVAr5UCHdTABFEQ_AUoAnoECAEQBA">
            Curitiba - PR
          </Link>
        </S.Links>
        <S.Links>
          <Link href="https://www.google.com/maps?q=Av.+Rui+Barbosa,+5828+-+Afonso+Pena,+S%C3%A3o+Jos%C3%A9+dos+Pinhais+-+PR,+83045-350&um=1&ie=UTF-8&sa=X&ved=2ahUKEwigxfCc2ar5AhXkA7kGHX8wBO4Q_AUoAXoECAEQAw">
            São José dos Pinhais (Afonso Pena) - PR
          </Link>
        </S.Links>

        <S.Links>
          <Link href="https://www.google.com.br/maps/place/Rua+Dona+Izabel+A+Redentora,+2640+-+Centro,+S%C3%A3o+Jos%C3%A9+dos+Pinhais+-+PR,+83005-010/@-25.5423717,-49.1953886,17z/data=!3m1!4b1!4m6!3m5!1s0x94dcf752a14a0c4b:0xd3e7d26bd92349aa!8m2!3d-25.5423717!4d-49.1931999!16s%2Fg%2F11c24rg_vm?hl=pt-br">
            São José dos Pinhais (Centro) - PR
          </Link>
        </S.Links>
        <S.Links>
          <Link href="https://www.google.com/maps?q=RUA.+Janiopolis,+551+-+Sala+07+-+Cidade+Jardim,+S%C3%A3o+Jos%C3%A9+dos+Pinhais+-+PR,+83035-100&um=1&ie=UTF-8&sa=X&ved=2ahUKEwibqsSy2ar5AhXABLkGHbtCAwAQ_AUoAXoECAEQAw">
            São José dos Pinhais (DETRAN) - PR
          </Link>
        </S.Links>
      </S.Column>
      <S.Column>
        <S.Links>
          <Link href="https://www.google.com/maps/dir//casa+de+placas+colombo/@-25.3500397,-49.2025698,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94dce96d4e93b079:0xa9bebe2006e7cc8!2m2!1d-49.2025856!2d-25.3499839">
            Colombo - PR
          </Link>
        </S.Links>
        <S.Links>
          <Link href="https://www.google.com/maps?lqi=ChhjYXNhIGRlIHBsYWNhcyByaW8gbmVncm9Ip_rchNW0gIAIWi4QABABEAIYABgBGAIYAxgEIhhjYXNhIGRlIHBsYWNhcyByaW8gbmVncm8yAnB0kgEJc2lnbl9zaG9w&phdesc=91rJDObau3c&vet=12ahUKEwj34-mYwer7AhU8rpUCHYxIAMEQ8UF6BAgEEBQ..i&lei=3BmSY_eFFbzc1sQPjJGBiAw&cs=0&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KakG2iF-k92UMesQqutL9U8I&daddr=Av.+Ildefonso+Camargo+Melo,+275+-+Campo+do+Gado,+Rio+Negro+-+PR,+83880-000">
            Rio Negro - PR
          </Link>
        </S.Links>
        <S.Links>Mafra - SC</S.Links>
        <S.Links>
          <Link href="https://www.google.com/maps?q=R.+Benjamin+Constant,+367+-+Centro,+Uni%C3%A3o+da+Vit%C3%B3ria+-+PR,+84600-290&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiw9rGo3qr5AhUstJUCHb8wDjQQ_AUoAXoECAEQAw">
            União da Vitória - PR
          </Link>
        </S.Links>
      </S.Column>

      <S.Column>
        <S.Heading>Explorar</S.Heading>
        <S.Links>
          <Link href="/produtos">Produtos</Link>
          <Link href="/galeria">Galeria</Link>
        </S.Links>
      </S.Column>

      <S.Column>
        <S.Heading>Empresa</S.Heading>
        <S.Links>
          <Link href="/sobre">Sobre</Link>
          <Link href="/comunicados">Comunicados</Link>
          <Link href="/contato">Contato</Link>
        </S.Links>
      </S.Column>
      <S.Column>
        <S.Heading>Redes Sociais</S.Heading>
        <S.Links>
          <Link href="/">Instagram</Link>
          <Link href="/sobre">Facebook</Link>
          <Link href="/informatica">Google</Link>
        </S.Links>
      </S.Column>
    </S.Content>

    <S.Copyright>© 2022 Copyright: casadeplacas.com.br</S.Copyright>
  </S.Wrapper>
)

export default Footer
