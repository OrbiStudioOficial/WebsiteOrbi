import * as S from './styles'

import Link from 'next/link'

const Contact = () => {
  return (
    <S.Container>
      <S.SectionIntro>
        <S.Phrase1 id="contactSection">
          QUAL SERÁ O NOSSO PRÓXIMO PROJETO?
        </S.Phrase1>
        <S.Phrase2>
          Envie-nos um e-mail para iniciarmos uma conversa:
          <p className="paragraph">contato@orbi3d.com</p>
        </S.Phrase2>
        <S.Phrase2>
          Se você precisar de orientação sobre quais informações devem ser
          fornecidas, basta entrar em contato conosco via whatsapp:
        </S.Phrase2>
        <S.Button className="cta-02">
          <span>ENTRAR EM CONTATO</span>
        </S.Button>
        <S.Infos>
          <div>
            <S.Info>QUESTÕES GERAIS</S.Info>
            <S.Description>
              Se você tiver uma pergunta ou comentário, entre em contato.
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
              Siga nosso trabalho pelo o Instagram e no Behance.
            </S.Description>
          </div>
        </S.Infos>
      </S.SectionIntro>
    </S.Container>
  )
}

export default Contact
