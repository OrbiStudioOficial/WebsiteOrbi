import * as S from './styles'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import React, { useState } from 'react'

const projects: IServices[] = [
  {
    field: 'Criação',
    subtitles: [
      {
        title: 'Renders 3D',
        subtitle: 'Renders 3D',
        description:
          ' Modelagem 3D e produção de renders realistas para arquitetos e empreendimentos imobiliários.'
      },
      {
        title: 'Vídeos Institucionais',
        subtitle: 'Vídeos Institucionais',
        description:
          ' Produzimos vídeos institucionais de lançamento, mesclando 3D e realidade. Com um roteiro elaborado por nós, esses vídeos ajudam na imersão do cliente em seu projeto.'
      },
      {
        title: 'Animações 3D',
        subtitle: 'Animações 3D',
        description:
          ' Animações totalmente em 3D, com ambientação, movimentos de câmera e elementos humanizados.'
      },
      {
        title: 'Plantas Humanizadas',
        subtitle: 'Plantas Humanizadas',
        description:
          ' Produzimos plantas 2D e 3D humanizadas, tornando seu material de divulgação mais imersivo e convincente, proporcionando uma maior profundidade aos olhos do cliente.'
      }
    ]
  },
  {
    field: 'Desenvolvimento',
    subtitles: [
      {
        title: 'Identidade visual',
        subtitle: 'Identidade visual',
        description:
          'Desenvolvemos a identidade visual única e impactante para a sua empresa, transmitindo de forma visual a essência e valores que a tornam singular no mercado.'
      },
      {
        title: 'Naming',
        subtitle: 'Naming',
        description:
          'Desenvolvemos nomes para empreendimentos ou escritórios de arquitetura, levando em consideração toda a engenharia da escolha do nome e o design de sua logo.'
      },
      {
        title: 'Conceito artístico',
        subtitle: 'Conceito artístico',
        description:
          'Produzimos estudos preliminares arquitetônicos e ideias artísticas. Com uma equipe altamente qualificada de arquitetos, conseguimos criar ideias para o seu negócio.'
      },
      {
        title: 'Estudos arquitetônicos',
        subtitle: 'Estudos arquitetônicos',
        description:
          ' Realizamos estudos arquitetônicos detalhados, explorando conceitos inovadores e soluções criativas para moldar o ambiente construído.'
      },
      {
        title: 'Estudo de fachada',
        subtitle: 'Estudo de fachada',
        description:
          'Com uma equipe de arquitetos qualificados, produzimos o design arquitetônico da fachada. A fachada do empreendimento é responsável pelas primeiras impressões do projeto.'
      }
    ]
  },
  {
    field: 'Divulgação',
    subtitles: [
      {
        title: 'Websites',
        subtitle: 'Websites',
        description:
          'Produzimos páginas web para seu empreendimento e escritório. Sites responsivos são necessários para trazer credibilidade ao seu negócio. Além dos sites profissionais, também desenvolvemos páginas de vendas e landing pages para a captação dos seus leads.'
      }
    ]
  }
]

interface IServices {
  field: string
  subtitles: Array<{
    title: string
    subtitle: string
    description: string
  }>
}

interface Props {
  selectedCategory?: string
}

const useProjects = (): IServices[] => {
  return projects
}

const getCategories = (projects: IServices[]): string[] => {
  const categories: string[] = []
  for (const project of projects) {
    const hasproject = categories.find(
      (existingProject) => existingProject === project.field
    )

    if (!hasproject) {
      categories.push(project.field)
    }
  }

  return categories
}

// eslint-disable-next-line no-empty-pattern
const Services = ({}: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.2
  })

  const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const animationVariantstwo = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const projects = useProjects()

  const categories = getCategories(projects)

  const [selectCategory, setSelectCategory] = useState(categories[0])
  const [selectedSubtitle, setSelectedSubtitle] = useState(
    projects[0].subtitles[0].subtitle
  )

  const handleSelectedCategory = (category: string) => {
    if (category === selectCategory) {
      setSelectCategory('')
      setSelectedSubtitle('')
      return
    }
    setSelectCategory(category)

    const newCategory = projects.find((project) => project.field === category)
    if (newCategory && newCategory.subtitles.length > 0) {
      setSelectedSubtitle(newCategory.subtitles[0].subtitle)
    }
  }

  if (selectCategory === '' && categories.length > 0) {
    setSelectCategory(categories[0])
  }

  const handleSelectedSubtitle = (subtitle: string) => {
    setSelectedSubtitle(subtitle)
  }

  const getFilteredCategories = (
    selectCategory: string,
    existingProject: IServices[]
  ): IServices[] => {
    if (!selectCategory) return existingProject
    return existingProject.filter((project) => project.field === selectCategory)
  }

  const filteredCategories = getFilteredCategories(selectCategory, projects)

  return (
    <>
      <S.Container>
        <S.SectionAbout>
          <S.Content>
            <S.Column>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={animationVariants}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <S.Title id="servicesSection"></S.Title>
                <S.Phrase10>Sobre</S.Phrase10>
                <S.Phrase1>
                  <strong>
                    Nossos serviços são divididos em três etapas essenciais:
                  </strong>
                  <br />
                  <br />
                  Criação, Desenvolvimento e Divulgação. Começamos com a fase de
                  criação, na qual concebemos ideias e o conceito central do
                  projeto.
                  <br />
                  <br />
                  Em seguida, na fase de desenvolvimento, transformamos essas
                  ideias em realidade, utilizando tecnologia de ponta.
                  <br />
                  <br />
                  Por fim, na etapa de divulgação, garantimos que o projeto
                  alcance seu público-alvo de forma estratégica, maximizando seu
                  sucesso. Nossa abordagem completa e integrada garante
                  resultados excepcionais para cada projeto.
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
                {categories.map((cat) => {
                  const isActive = selectCategory === cat
                  return (
                    <S.Button
                      key={cat}
                      onClick={() => handleSelectedCategory(cat)}
                      selected={isActive && selectCategory === cat}
                    >
                      {cat}
                    </S.Button>
                  )
                })}
                {filteredCategories.map((project) => (
                  <S.Info key={project.field}>
                    <S.Center>
                      {project.subtitles.map((sub, index) => {
                        const isSelected = selectedSubtitle === sub.subtitle
                        return (
                          <>
                            <S.SubtitleAlign key={index}>
                              <S.Subtitle
                                onClick={() =>
                                  handleSelectedSubtitle(sub.subtitle)
                                }
                                selected={isSelected}
                              >
                                {sub.subtitle}
                              </S.Subtitle>
                            </S.SubtitleAlign>
                          </>
                        )
                      })}
                    </S.Center>
                    {project.subtitles.map((sub, index) => {
                      const isSelected = selectedSubtitle === sub.subtitle
                      return (
                        <>
                          <div>
                            <S.InfoAling key={index}>
                              <motion.div
                                initial="hidden"
                                animate={isSelected ? 'visible' : 'hidden'}
                                variants={animationVariants}
                                transition={{ duration: 0.3 }}
                              >
                                {isSelected && (
                                  <div>
                                    <S.TitleFilter>{sub.title}</S.TitleFilter>
                                    <S.Description>
                                      {sub.description}
                                    </S.Description>
                                  </div>
                                )}
                              </motion.div>
                            </S.InfoAling>
                          </div>
                        </>
                      )
                    })}
                  </S.Info>
                ))}
              </motion.div>
            </S.Columntwo>
          </S.Content>
        </S.SectionAbout>
      </S.Container>
    </>
  )
}

export default Services
