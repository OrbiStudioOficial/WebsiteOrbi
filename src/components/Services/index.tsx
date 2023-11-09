import * as S from './styles'

import Dropdown from 'components/Dropdown'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1
  })

  const animationVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }

  return (
    <>
      <S.Container>
        <S.Info>
          <S.Center>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={animationVariants}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <S.Phrase1>
                Entenda como a orbi pode ajudar a sua empresa
              </S.Phrase1>
              <S.Phrase2>
                Imagine poder visualizar projetos arquitetônicos em detalhes
                impressionantes antes mesmo de colocá-los em prática. <br />
                <br />
                Com nossa experiência em renderização 3D, podemos criar
                visualizações realistas e envolventes que permitem que você
                explore e apresente suas ideias de maneira convincente. <br />
                <br />
                Seja um projeto residencial, comercial ou industrial, estamos
                aqui para ajudar a dar vida à sua visão.
              </S.Phrase2>
            </motion.div>
          </S.Center>
          <Dropdown />
          <S.Mobile>
            <S.BoxMobileOrange>
              <S.TitleOrange>Criação</S.TitleOrange>
            </S.BoxMobileOrange>
            <S.BoxMobile>
              <S.Title2>Renders 3D</S.Title2>
              <S.PhraseBottom>
                Modelagem 3D e produção de renders realistas para arquitetos e
                empreendimentos imobiliários.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Vídeos Institucionais</S.Title2>
              <S.PhraseBottom>
                Produzimos vídeos institucionais de lançamento, mesclando 3D e
                realidade. Com um roteiro elaborado por nós, esses vídeos ajudam
                na imersão do cliente em seu projeto.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Animações 3D</S.Title2>
              <S.PhraseBottom>
                Animações totalmente em 3D, com ambientação, movimentos de
                câmera e elementos humanizados.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Plantas Humanizadas</S.Title2>
              <S.PhraseBottom>
                Produzimos plantas 2D e 3D humanizadas, tornando seu material de
                divulgação mais imersivo e convincente, proporcionando uma maior
                profundidade aos olhos do cliente.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobileOrange>
              <S.TitleOrange>Desenvolvimento</S.TitleOrange>
            </S.BoxMobileOrange>

            <S.BoxMobile>
              <S.Title2>Identidade visual</S.Title2>
              <S.PhraseBottom>
                Desenvolvemos a identidade visual única e impactante para a sua
                empresa, transmitindo de forma visual a essência e valores que a
                tornam singular no mercado.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Naming</S.Title2>
              <S.PhraseBottom>
                Desenvolvemos nomes para empreendimentos ou escritórios de
                arquitetura, levando em consideração toda a engenharia da
                escolha do nome e o design de sua logo.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Conceito artístico</S.Title2>
              <S.PhraseBottom>
                Produzimos estudos preliminares arquitetônicos e ideias
                artísticas. Com uma equipe altamente qualificada de arquitetos,
                conseguimos criar ideias para o seu negócio.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Estudos arquitetônicos</S.Title2>
              <S.PhraseBottom>
                Realizamos estudos arquitetônicos detalhados, explorando
                conceitos inovadores e soluções criativas para moldar o ambiente
                construído.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Estudo de fachada</S.Title2>
              <S.PhraseBottom>
                Com uma equipe de arquitetos qualificados, produzimos o design
                arquitetônico da fachada. A fachada do empreendimento é
                responsável pelas primeiras impressões do projeto.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobileOrange>
              <S.TitleOrange>Divulgação</S.TitleOrange>
            </S.BoxMobileOrange>

            <S.BoxMobile>
              <S.Title2>Websites</S.Title2>
              <S.PhraseBottom>
                Produzimos páginas web para seu empreendimento e escritório.
                Sites responsivos são necessários para trazer credibilidade ao
                seu negócio. Além dos sites profissionais, também desenvolvemos
                páginas de vendas e landing pages para a captação dos seus
                leads.
              </S.PhraseBottom>
            </S.BoxMobile>
          </S.Mobile>
        </S.Info>
      </S.Container>
    </>
  )
}

export default Services
