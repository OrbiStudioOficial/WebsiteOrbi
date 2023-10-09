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
              <S.Title2>Identidade VISUAL</S.Title2>
              <S.PhraseBottom>
                Ao longo dos anos, entregamos resultados excepcionais,
                colaborando com uma ampla variedade de clientes. Nosso portfólio
                abrangente demonstra nossa capacidade de transformar ideias em
                realidade visual, fornecendo soluções personalizadas e
                impactantes.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Naming</S.Title2>
              <S.PhraseBottom>
                Ao longo dos anos, entregamos resultados excepcionais,
                colaborando com uma ampla variedade de clientes. Nosso portfólio
                abrangente demonstra nossa capacidade de transformar ideias em
                realidade visual, fornecendo soluções personalizadas e
                impactantes.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Conceito Artístico</S.Title2>
              <S.PhraseBottom>
                Ao longo dos anos, entregamos resultados excepcionais,
                colaborando com uma ampla variedade de clientes. Nosso portfólio
                abrangente demonstra nossa capacidade de transformar ideias em
                realidade visual, fornecendo soluções personalizadas e
                impactantes.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Estudos Arquitetônicos</S.Title2>
              <S.PhraseBottom>
                Ao longo dos anos, entregamos resultados excepcionais,
                colaborando com uma ampla variedade de clientes. Nosso portfólio
                abrangente demonstra nossa capacidade de transformar ideias em
                realidade visual, fornecendo soluções personalizadas e
                impactantes.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Estudo de Fachada</S.Title2>
              <S.PhraseBottom>
                Ao longo dos anos, entregamos resultados excepcionais,
                colaborando com uma ampla variedade de clientes. Nosso portfólio
                abrangente demonstra nossa capacidade de transformar ideias em
                realidade visual, fornecendo soluções personalizadas e
                impactantes.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Identidade Visual</S.Title2>
              <S.PhraseBottom>
                Ao longo dos anos, entregamos resultados excepcionais,
                colaborando com uma ampla variedade de clientes. Nosso portfólio
                abrangente demonstra nossa capacidade de transformar ideias em
                realidade visual, fornecendo soluções personalizadas e
                impactantes.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobileOrange>
              <S.TitleOrange>Desenvolvimento</S.TitleOrange>
            </S.BoxMobileOrange>

            <S.BoxMobile>
              <S.Title2>Retratos 3d realistas</S.Title2>
              <S.PhraseBottom>
                Ao longo dos anos, entregamos resultados excepcionais,
                colaborando com uma ampla variedade de clientes. Nosso portfólio
                abrangente demonstra nossa capacidade de transformar ideias em
                realidade visual, fornecendo soluções personalizadas e
                impactantes.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Imagens</S.Title2>
              <S.PhraseBottom>
                Ao longo dos anos, entregamos resultados excepcionais,
                colaborando com uma ampla variedade de clientes. Nosso portfólio
                abrangente demonstra nossa capacidade de transformar ideias em
                realidade visual, fornecendo soluções personalizadas e
                impactantes.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Plantas</S.Title2>
              <S.PhraseBottom>
                Ao longo dos anos, entregamos resultados excepcionais,
                colaborando com uma ampla variedade de clientes. Nosso portfólio
                abrangente demonstra nossa capacidade de transformar ideias em
                realidade visual, fornecendo soluções personalizadas e
                impactantes.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Implantação humanizada</S.Title2>
              <S.PhraseBottom>
                Ao longo dos anos, entregamos resultados excepcionais,
                colaborando com uma ampla variedade de clientes. Nosso portfólio
                abrangente demonstra nossa capacidade de transformar ideias em
                realidade visual, fornecendo soluções personalizadas e
                impactantes.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Imagens fachada</S.Title2>
              <S.PhraseBottom>
                Ao longo dos anos, entregamos resultados excepcionais,
                colaborando com uma ampla variedade de clientes. Nosso portfólio
                abrangente demonstra nossa capacidade de transformar ideias em
                realidade visual, fornecendo soluções personalizadas e
                impactantes.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Foto inserção</S.Title2>
              <S.PhraseBottom>
                Ao longo dos anos, entregamos resultados excepcionais,
                colaborando com uma ampla variedade de clientes. Nosso portfólio
                abrangente demonstra nossa capacidade de transformar ideias em
                realidade visual, fornecendo soluções personalizadas e
                impactantes.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Vídeo de lançamento</S.Title2>
              <S.PhraseBottom>
                Ao longo dos anos, entregamos resultados excepcionais,
                colaborando com uma ampla variedade de clientes. Nosso portfólio
                abrangente demonstra nossa capacidade de transformar ideias em
                realidade visual, fornecendo soluções personalizadas e
                impactantes.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Vídeo animações 3d</S.Title2>
              <S.PhraseBottom>
                Ao longo dos anos, entregamos resultados excepcionais,
                colaborando com uma ampla variedade de clientes. Nosso portfólio
                abrangente demonstra nossa capacidade de transformar ideias em
                realidade visual, fornecendo soluções personalizadas e
                impactantes.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobileOrange>
              <S.TitleOrange>Divulgação</S.TitleOrange>
            </S.BoxMobileOrange>

            <S.BoxMobile>
              <S.Title2>Social media</S.Title2>
              <S.PhraseBottom>
                Ao longo dos anos, entregamos resultados excepcionais,
                colaborando com uma ampla variedade de clientes. Nosso portfólio
                abrangente demonstra nossa capacidade de transformar ideias em
                realidade visual, fornecendo soluções personalizadas e
                impactantes.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Websites</S.Title2>
              <S.PhraseBottom>
                Ao longo dos anos, entregamos resultados excepcionais,
                colaborando com uma ampla variedade de clientes. Nosso portfólio
                abrangente demonstra nossa capacidade de transformar ideias em
                realidade visual, fornecendo soluções personalizadas e
                impactantes.
              </S.PhraseBottom>
            </S.BoxMobile>

            <S.BoxMobile>
              <S.Title2>Gestão de tráfego</S.Title2>
              <S.PhraseBottom>
                Ao longo dos anos, entregamos resultados excepcionais,
                colaborando com uma ampla variedade de clientes. Nosso portfólio
                abrangente demonstra nossa capacidade de transformar ideias em
                realidade visual, fornecendo soluções personalizadas e
                impactantes.
              </S.PhraseBottom>
            </S.BoxMobile>
          </S.Mobile>
        </S.Info>
      </S.Container>
    </>
  )
}

export default Services
