import * as S from './styles'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'

import { useLayoutEffect, useRef } from 'react'

import AboutMobile from '../AboutMobile'

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger)

  const component = useRef<HTMLDivElement>(null)
  const slider = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.panel')
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => '+=' + (slider.current?.offsetWidth ?? 0)
        }
      })
    }, component)
    return () => ctx.revert()
  })

  return (
    <>
      <S.Test ref={component}>
        <S.Container ref={slider}>
          <S.Panel className="blue panel">
            <S.Content>
              <S.Column id="aboutSection">
                <S.Phrase1>Dedicação em cada etapa</S.Phrase1>
                <S.Phrase3>
                  Cada detalhe é cuidadosamente planejado, cada linha desenhada
                  com precisão e cada textura escolhida com maestria.
                  <br />
                  <br /> Não poupamos esforços para criar ambientes imersivos e
                  realistas, onde a beleza se encontra com a funcionalidade.
                  <br />
                  <br />
                  Nossa dedicação é a base de nosso trabalho, o ingrediente
                  essencial para criar experiências visualmente impactantes e
                  emocionalmente envolventes.
                </S.Phrase3>
              </S.Column>

              <S.Columntwo>
                <S.Rows>
                  <S.Desktop>
                    <S.Title2>Nossa história</S.Title2>
                    <S.Phrase2>
                      Ao longo dos anos, entregamos resultados excepcionais,
                      colaborando com uma ampla variedade de clientes. Nosso
                      portfólio abrangente demonstra nossa capacidade de
                      transformar ideias em realidade visual, fornecendo
                      soluções personalizadas e impactantes.
                    </S.Phrase2>

                    <S.Title2>criatividade elevada</S.Title2>
                    <S.Phrase2>
                      Acreditamos que a combinação de criatividade e tecnologia
                      é o que impulsiona nossos projetos 3D além dos limites
                      convencionais.
                    </S.Phrase2>

                    <S.Title2>+100 PROJETOS</S.Title2>
                    <S.Phrase2>
                      Ao longo dos anos, entregamos resultados excepcionais,
                      colaborando com uma ampla variedade de clientes. Nosso
                      portfólio abrangente demonstra nossa capacidade de
                      transformar ideias em realidade visual, fornecendo
                      soluções personalizadas e impactantes.
                    </S.Phrase2>

                    <S.Title2>tecnologia avançada</S.Title2>
                    <S.Phrase2>
                      Acreditamos que a combinação de criatividade e tecnologia
                      é o que impulsiona nossos projetos 3D além dos limites
                      convencionais.
                    </S.Phrase2>

                    <S.Title2>Nossa equipe</S.Title2>
                    <S.Phrase2>
                      Com um histórico sólido de no setor de design 3D, nossa
                      equipe consolidou um profundo conhecimento e competência.
                      A experiência adquirida ao longo dos anos nos permite
                      superar desafios e atender às demandas de nossos clientes
                      com eficiência e excelência.
                    </S.Phrase2>

                    <S.Title2>Detalhes impecáveis</S.Title2>
                    <S.Phrase2>
                      Nossa dedicação à qualidade e ao acabamento impecável
                      garante resultados visuais impressionantes, que elevam a
                      apresentação de projetos arquitetônicos e de design de
                      interiores.
                    </S.Phrase2>

                    <S.Title2>Referências em projetos</S.Title2>
                    <S.Phrase2>
                      cada projeto é uma obra-prima única, criada para se tornar
                      uma referência no mundo da arquitetura. Nossa paixão pela
                      excelência nos impulsiona a ultrapassar fronteiras e
                      alcançar novos patamares de qualidade e inovação.
                    </S.Phrase2>

                    <S.Title2>Excelência em renderizações</S.Title2>
                    <S.Phrase2>
                      Nossas renderizações atingem um nível de qualidade
                      excepcional, onde cada imagem é uma verdadeira obra-prima
                      visual.
                    </S.Phrase2>
                  </S.Desktop>
                  <S.Mobile>
                    <S.BoxMobile>
                      <S.Title2>Nossa história</S.Title2>
                      <S.Phrase2>
                        Ao longo dos anos, entregamos resultados excepcionais,
                        colaborando com uma ampla variedade de clientes. Nosso
                        portfólio abrangente demonstra nossa capacidade de
                        transformar ideias em realidade visual, fornecendo
                        soluções personalizadas e impactantes.
                      </S.Phrase2>
                    </S.BoxMobile>

                    <S.BoxMobile>
                      <S.Title2>criatividade elevada</S.Title2>
                      <S.Phrase2>
                        Acreditamos que a combinação de criatividade e
                        tecnologia é o que impulsiona nossos projetos 3D além
                        dos limites convencionais.
                      </S.Phrase2>
                    </S.BoxMobile>

                    <S.BoxMobile>
                      <S.Title2>+100 PROJETOS</S.Title2>
                      <S.Phrase2>
                        Ao longo dos anos, entregamos resultados excepcionais,
                        colaborando com uma ampla variedade de clientes. Nosso
                        portfólio abrangente demonstra nossa capacidade de
                        transformar ideias em realidade visual, fornecendo
                        soluções personalizadas e impactantes.
                      </S.Phrase2>
                    </S.BoxMobile>

                    <S.BoxMobile>
                      <S.Title2>tecnologia avançada</S.Title2>
                      <S.Phrase2>
                        Acreditamos que a combinação de criatividade e
                        tecnologia é o que impulsiona nossos projetos 3D além
                        dos limites convencionais.
                      </S.Phrase2>
                    </S.BoxMobile>

                    <S.BoxMobile>
                      <S.Title2>Nossa equipe</S.Title2>
                      <S.Phrase2>
                        Com um histórico sólido de no setor de design 3D, nossa
                        equipe consolidou um profundo conhecimento e
                        competência. A experiência adquirida ao longo dos anos
                        nos permite superar desafios e atender às demandas de
                        nossos clientes com eficiência e excelência.
                      </S.Phrase2>
                    </S.BoxMobile>

                    <S.BoxMobile>
                      <S.Title2>Detalhes impecáveis</S.Title2>
                      <S.Phrase2>
                        Nossa dedicação à qualidade e ao acabamento impecável
                        garante resultados visuais impressionantes, que elevam a
                        apresentação de projetos arquitetônicos e de design de
                        interiores.
                      </S.Phrase2>
                    </S.BoxMobile>

                    <S.BoxMobile>
                      <S.Title2>Referências em projetos</S.Title2>
                      <S.Phrase2>
                        cada projeto é uma obra-prima única, criada para se
                        tornar uma referência no mundo da arquitetura. Nossa
                        paixão pela excelência nos impulsiona a ultrapassar
                        fronteiras e alcançar novos patamares de qualidade e
                        inovação.
                      </S.Phrase2>
                    </S.BoxMobile>

                    <S.BoxMobile>
                      <S.Title2>Excelência em renderizações</S.Title2>
                      <S.Phrase2>
                        Nossas renderizações atingem um nível de qualidade
                        excepcional, onde cada imagem é uma verdadeira
                        obra-prima visual.
                      </S.Phrase2>
                    </S.BoxMobile>
                  </S.Mobile>
                </S.Rows>
              </S.Columntwo>
            </S.Content>
          </S.Panel>

          <S.Panel className="red panel">
            <S.Content>
              <S.Column id="aboutSection">
                <S.Phrase1>projetos recentes</S.Phrase1>
                <S.Phrase3>
                  Confira nossos projetos recentes e mergulhe em um mundo de
                  criatividade e inovação em 3D.
                  <br />
                  <br /> Com um portfólio diversificado e atualizado,
                  apresentamos uma coleção de projetos que refletem nossa
                  expertise e compromisso em oferecer soluções visualmente
                  impactantes.
                  <br />
                  <br /> cada projeto recente é uma prova do nosso talento em
                  transformar ideias em realidade tridimensional, proporcionando
                  uma experiência visual envolvente e inspiradora.
                </S.Phrase3>
              </S.Column>

              <div>
                <S.Phrase1>PROJETOS RECENTES</S.Phrase1>
                <S.Wrapper>
                  <S.Box>
                    <Image
                      src={'/img/fundointro.jpg'}
                      alt="imagem 01"
                      width={450}
                      height={250}
                      objectFit="cover"
                    />
                  </S.Box>
                  <S.Box>
                    <Image
                      src={'/img/casasouza.jpg'}
                      alt="imagem 01"
                      width={450}
                      height={250}
                      objectFit="cover"
                    />
                  </S.Box>
                  <S.Box>
                    <Image
                      src={'/img/coatingline.jpg'}
                      alt="imagem 01"
                      width={450}
                      height={250}
                      objectFit="cover"
                    />
                  </S.Box>
                  <S.Box>
                    <Image
                      src={'/img/cafealoha.jpg'}
                      alt="imagem 01"
                      width={450}
                      height={250}
                      objectFit="cover"
                    />
                  </S.Box>
                </S.Wrapper>
              </div>
            </S.Content>
          </S.Panel>
        </S.Container>
      </S.Test>

      <AboutMobile />
    </>
  )
}

export default Contact
