import Link from 'next/link'
import * as S from './styles'

const Contact = () => {
  return (
    <S.Container>
      <S.SectionIntro>
        <S.SectionMobile>
          <S.Phrase1>QUAL SERÁ O NOSSO PRÓXIMO PROJETO?</S.Phrase1>
          <S.Phrase2>
            envie-nos um e-mail para iniciarmos uma conversa:
            <p className="paragraph">contato@orbi3d.com</p>
          </S.Phrase2>
          <S.Phrase2>
            Se você precisar de orientação sobre quais informações devem ser
            fornecidas, basta entrar em contato conosco via whatsapp:
          </S.Phrase2>
          <S.Button className="cta-02">
            <span>ENTRAR EM CONTATO</span>
          </S.Button>
        </S.SectionMobile>
        <S.Infos>
          <div>
            <S.Info>QUESTÕES GERAIS</S.Info>
            <S.Description>
              Se você tiver uma pergunta ou comentário, entre em contato:
            </S.Description>
          </div>

          <div>
            <S.Info>LINKS</S.Info>
            <S.Ul>
              <Link href={'/'}>
                <S.Li>HOME</S.Li>
              </Link>
              <Link href={'/sobre'}>
                <S.Li>SOBRE</S.Li>
              </Link>
              <Link href={'/servicos'}>
                <S.Li>SERVIÇOS</S.Li>
              </Link>
              <Link href={'/galeria'}>
                <S.Li>PROJETOS</S.Li>
              </Link>
              <Link href={'/contato'}>
                <S.Li>CONTATO</S.Li>
              </Link>
            </S.Ul>
          </div>

          <div>
            <S.Info>SIGA-NOS</S.Info>
            <S.Description>
              Se você tiver uma pergunta ou comentário, entre em contato.
            </S.Description>
          </div>
        </S.Infos>
      </S.SectionIntro>
    </S.Container>
  )
}

export default Contact
