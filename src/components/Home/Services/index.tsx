import * as S from './styles'

import React, { useState } from 'react'

const projects: IServices[] = [
  {
    field: 'Criação',
    subtitles: [
      {
        title: 'Identidade visual',
        subtitle: 'Identidade visual',
        description:
          'Nossa equipe de design cria uma identidade visual única para seus projetos, incorporando cores, tipografia e elementos gráficos que refletem a essência de sua visão.'
      },
      {
        title: 'Naming',
        subtitle: 'Naming',
        description:
          'Desenvolvemos nomes poderosos e memoráveis para seus projetos, produtos ou empresas, garantindo que cada nome conte uma história e atraia seu público-alvo.'
      },
      {
        title: 'Conceito Artístico',
        subtitle: 'Conceito Artístico',
        description:
          'Criamos conceitos artísticos que representam visualmente a essência e a mensagem por trás do seu projeto.'
      },
      {
        title: 'Estudos Arquitetônico',
        subtitle: 'Estudos Arquitetônico',
        description:
          'Realizamos estudos arquitetônicos detalhados para garantir que cada aspecto do seu projeto seja funcional e esteticamente atraente, ao mesmo tempo em que atende a todas as especificações técnicas.'
      },
      {
        title: 'Estudos de fachada',
        subtitle: 'Estudos de fachada',
        description:
          'Nossos estudos de fachada detalhados garantem que a parte externa do seu edifício seja projetada com precisão e estética, incorporando materiais e elementos que impressionam desde o primeiro olhar.'
      }
    ]
  },
  {
    field: 'Desenvolvimento',
    subtitles: [
      {
        title: 'Retratos 3D Realistas',
        subtitle: 'Retratos 3D Realistas',
        description:
          'Criamos retratos 3D realistas que capturam a essência das pessoas e lugares, adicionando uma dimensão extra de realismo e emoção às suas imagens.'
      },
      {
        title: 'Imagens',
        subtitle: 'Imagens',
        description:
          'Produzimos imagens de alta qualidade que destacam os detalhes e a beleza de seus projetos, produtos ou ideias, deixando uma impressão duradoura.'
      },
      {
        title: 'Plantas',
        subtitle: 'Plantas',
        description:
          'Nossas plantas de implantação humanizadas incorporam elementos que dão vida aos espaços, ajudando você a visualizar como as pessoas interagirão com o ambiente.'
      },
      {
        title: 'Implantação Humanizada',
        subtitle: 'Implantação Humanizada',
        description:
          'Nossas plantas de implantação humanizadas incorporam elementos que dão vida aos espaços, ajudando você a visualizar como as pessoas interagirão com o ambiente.'
      },
      {
        title: 'Imagens Fachada',
        subtitle: 'Imagens Fachada',
        description:
          'Produzimos imagens de alta qualidade que destacam os detalhes e a beleza de seus projetos, produtos ou ideias, deixando uma impressão duradoura.'
      },
      {
        title: 'Foto Inserção',
        subtitle: 'Foto Inserção',
        description:
          'Com a técnica de foto inserção, integramos perfeitamente elementos virtuais, como maquetes 3D e design de interiores, em imagens do mundo real. '
      },
      {
        title: 'Vídeo De Lançamento',
        subtitle: 'Vídeo De Lançamento',
        description:
          'Criamos vídeos de lançamento envolventes que contam a história por trás do seu projeto, produto ou empresa, gerando entusiasmo e interesse.'
      },
      {
        title: 'Vídeo Animações 3D',
        subtitle: 'Vídeo Animações 3D',
        description:
          'Nossas animações 3D dinâmicas explicam conceitos complexos de forma visualmente atraente, tornando-os acessíveis ao público.'
      }
    ]
  },
  {
    field: 'Divulgação',
    subtitles: [
      {
        title: 'Social Media',
        subtitle: 'Social Media',
        description:
          'Gerenciamos suas redes sociais, compartilhando conteúdo visualmente atraente para atrair e engajar seu público.'
      },
      {
        title: 'Websites',
        subtitle: 'Websites',
        description:
          'Criamos websites impressionantes que representam sua marca, incorporando imagens 3D e visualizações para criar uma experiência digital envolvente.'
      },
      {
        title: 'Gestão de Tráfego',
        subtitle: 'Gestão de Tráfego',
        description:
          'Gerenciamos o tráfego direcionando estrategicamente visitantes para o seu site ou plataforma, maximizando sua presença online.'
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
  const projects = useProjects()

  const categories = getCategories(projects)

  const [selectCategory, setSelectCategory] = useState(categories[0])
  const [selectedSubtitle, setSelectedSubtitle] = useState('')

  const handleSelectedCategory = (category: string) => {
    if (category === selectCategory) {
      setSelectCategory('')
      setSelectedSubtitle('')
      return
    }
    setSelectCategory(category)
    setSelectedSubtitle('')
  }

  if (selectCategory === '' && categories.length > 0) {
    setSelectCategory(categories[0])
  }

  const handleSelectedSubtitle = (subtitle: string) => {
    if (subtitle === selectedSubtitle) {
      setSelectedSubtitle('')
    } else {
      setSelectedSubtitle(subtitle)
    }
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
                sucesso. Nossa abordagem completa e integrada garante resultados
                excepcionais para cada projeto.
              </S.Phrase1>
            </S.Column>
            <S.Columntwo>
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
                            {isSelected && (
                              <div>
                                <S.TitleFilter>{sub.title}</S.TitleFilter>
                                <S.Description>{sub.description}</S.Description>
                              </div>
                            )}
                          </S.InfoAling>
                        </div>
                      </>
                    )
                  })}
                </S.Info>
              ))}
            </S.Columntwo>
          </S.Content>
        </S.SectionAbout>
      </S.Container>
    </>
  )
}

export default Services