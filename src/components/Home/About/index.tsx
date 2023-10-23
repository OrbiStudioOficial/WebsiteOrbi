import * as S from './styles'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import React from 'react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1
  })

  const animationVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }

  const animationVariantstwo = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }

  return (
    <>
      <S.Container>
        <S.SectionAbout>
          <S.Content>
            <S.Column id="aboutSection">
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={animationVariants}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <S.Phrase10>Sobre</S.Phrase10>
                <S.Phrase1>
                  Comprovada experiência e expertise ao longo de anos no setor,
                  entregamos resultados de qualidade excepcional, impulsionados
                  pela inovação e criatividade.
                  <br />
                  <br />
                  Nossa abordagem colaborativa e atendimento personalizado
                  garantem soluções sob medida, enquanto nossa paixão pela
                  excelência nos diferencia.
                </S.Phrase1>
              </motion.div>
            </S.Column>
            <S.Columntwo>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={animationVariantstwo}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <S.Title2>POR QUE A ORBI?</S.Title2>
                <S.Phrase2>
                  Explore nosso processo de trabalho e os benefícios de escolher
                  nossa empresa para suas necessidades de renderização.
                </S.Phrase2>

                <S.Title2>CLIENTES SATISFEITOS</S.Title2>
                <S.Phrase2>
                  Atendemos vários clientes de vários lugares, sempre prezando
                  pela qualidade e excelência nas renderizações.
                </S.Phrase2>

                <S.Title2>DO CONCEITO À REALIDADE</S.Title2>
                <S.Phrase2>
                  Explore a variedade de setores e tipos de projetos que
                  atendemos. Desde visualizações arquitetônicas e designs de
                  produtos até anúncios publicitários, saiba como nossa
                  renderização 3D pode ser aplicada em várias áreas criativas.
                </S.Phrase2>

                <S.Title2>INOVAÇÃO VISUAL</S.Title2>
                <S.Phrase2>
                  Estamos sempre por dentro das tendências e tecnologias
                  emergentes na renderização 3D, enquanto compartilhamos nossos
                  planos para moldar o futuro da indústria com renderização
                  interativa, realidade aumentada e muito mais.
                </S.Phrase2>

                <S.Title2>SETORES DIVERSOS</S.Title2>
                <S.Phrase2>
                  Atendemos uma ampla variedade de setores, incluindo
                  arquitetura, design de interiores, publicidade e muito mais.
                  Nossas soluções são sempre adaptadas às necessidades únicas de
                  cada cliente.
                </S.Phrase2>
              </motion.div>
            </S.Columntwo>
          </S.Content>
        </S.SectionAbout>
      </S.Container>
    </>
  )
}

export default About
