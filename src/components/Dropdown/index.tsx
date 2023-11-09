import * as S from './styles'
import { useState } from 'react'

const Test = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [dropdownOpen2, setDropdownOpen2] = useState(false)
  const [dropdownOpen3, setDropdownOpen3] = useState(false)

  const [activeItem, setActiveItem] = useState<number | null>(null)
  const [activeSubItem, setActiveSubItem] = useState<number | null>(null)
  const [activeItemOne, setActiveItemOne] = useState<number | null>(null)
  const [activeItemTwo, setActiveItemTwo] = useState<number | null>(null)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2)
  }

  const toggleDropdown3 = () => {
    setDropdownOpen3(!dropdownOpen3)
  }

  const handleItemClickOne = (index: number) => {
    if (activeItemOne === index) {
      setActiveItemOne(null)
    } else {
      setActiveItemOne(index)
    }
  }

  const handleItemClickTwo = (index: number) => {
    if (activeItemTwo === index) {
      setActiveItemTwo(null)
    } else {
      setActiveItemTwo(index)
    }
  }

  const handleItemClick = (index: number) => {
    if (activeItem === index) {
      setActiveItem(null)
    } else {
      setActiveItem(index)
    }
  }

  const handleSubItemClick = (index: number) => {
    if (activeSubItem === index) {
      setActiveSubItem(null)
    } else {
      setActiveSubItem(index)
    }
  }

  return (
    <>
      <S.Wrapper>
        <S.Dropdown>
          <S.Header onClick={() => handleItemClick(100)}>
            <S.HeaderTitleWrapper>
              <S.DropdownHeader onClick={toggleDropdown}>
                CRIAÇÃO
              </S.DropdownHeader>
              <S.Arrow onClick={toggleDropdown}>
                <img
                  className={activeItem === 100 ? 'active' : ''}
                  src="img/arrow.png"
                />
              </S.Arrow>
            </S.HeaderTitleWrapper>
          </S.Header>

          {dropdownOpen && (
            <>
              <S.DropdownContent>
                <S.SubHeader>
                  <S.SubheaderTitleWrapper
                    onClick={() => handleSubItemClick(1)}
                  >
                    <div className={activeItem === 1 ? 'active' : ''}>
                      <S.SubheaderTitle>Renders 3D</S.SubheaderTitle>
                    </div>
                    <S.SubArrow>
                      <img
                        className={activeSubItem === 1 ? 'active' : ''}
                        src="img/arrow.png"
                      />
                    </S.SubArrow>
                  </S.SubheaderTitleWrapper>

                  {activeSubItem === 1 && (
                    <ul>
                      <li>
                        Modelagem 3D e produção de renders realistas para
                        arquitetos e empreendimentos imobiliários.
                      </li>
                    </ul>
                  )}
                </S.SubHeader>
              </S.DropdownContent>

              <S.DropdownContent>
                <S.SubHeader>
                  <S.SubheaderTitleWrapper
                    onClick={() => handleSubItemClick(2)}
                  >
                    <div className={activeItem === 2 ? 'active' : ''}>
                      <S.SubheaderTitle>Vídeos Institucionais</S.SubheaderTitle>
                    </div>
                    <S.SubArrow>
                      <img
                        className={activeSubItem === 2 ? 'active' : ''}
                        src="img/arrow.png"
                      />
                    </S.SubArrow>
                  </S.SubheaderTitleWrapper>

                  {activeSubItem === 2 && (
                    <ul>
                      <li>
                        Produzimos vídeos institucionais de lançamento,
                        mesclando 3D e realidade. Com um roteiro elaborado por
                        nós, esses vídeos ajudam na imersão do cliente em seu
                        projeto.
                      </li>
                    </ul>
                  )}
                </S.SubHeader>
              </S.DropdownContent>

              <S.DropdownContent>
                <S.SubHeader>
                  <S.SubheaderTitleWrapper
                    onClick={() => handleSubItemClick(3)}
                  >
                    <div className={activeItem === 3 ? 'active' : ''}>
                      <S.SubheaderTitle>Animações 3D</S.SubheaderTitle>
                    </div>
                    <S.SubArrow>
                      <img
                        className={activeSubItem === 3 ? 'active' : ''}
                        src="img/arrow.png"
                      />
                    </S.SubArrow>
                  </S.SubheaderTitleWrapper>

                  {activeSubItem === 3 && (
                    <ul>
                      <li>
                        Animações totalmente em 3D, com ambientação, movimentos
                        de câmera e elementos humanizados.
                      </li>
                    </ul>
                  )}
                </S.SubHeader>
              </S.DropdownContent>

              <S.DropdownContent>
                <S.SubHeader>
                  <S.SubheaderTitleWrapper
                    onClick={() => handleSubItemClick(4)}
                  >
                    <div className={activeItem === 4 ? 'active' : ''}>
                      <S.SubheaderTitle>Plantas Humanizadas</S.SubheaderTitle>
                    </div>
                    <S.SubArrow>
                      <img
                        className={activeSubItem === 4 ? 'active' : ''}
                        src="img/arrow.png"
                      />
                    </S.SubArrow>
                  </S.SubheaderTitleWrapper>

                  {activeSubItem === 4 && (
                    <ul>
                      <li>
                        Produzimos plantas 2D e 3D humanizadas, tornando seu
                        material de divulgação mais imersivo e convincente,
                        proporcionando uma maior profundidade aos olhos do
                        cliente.
                      </li>
                    </ul>
                  )}
                </S.SubHeader>
              </S.DropdownContent>
            </>
          )}
        </S.Dropdown>

        <S.Dropdown>
          <S.Header onClick={() => handleItemClickOne(102)}>
            <S.HeaderTitleWrapper>
              <S.DropdownHeader onClick={toggleDropdown2}>
                DESENVOLVIMENTO
              </S.DropdownHeader>
              <S.Arrow onClick={toggleDropdown2}>
                <img
                  className={activeItemOne === 102 ? 'active' : ''}
                  src="img/arrow.png"
                />
              </S.Arrow>
            </S.HeaderTitleWrapper>
          </S.Header>

          {dropdownOpen2 && (
            <>
              <S.DropdownContent>
                <S.SubHeader>
                  <S.SubheaderTitleWrapper
                    onClick={() => handleSubItemClick(7)}
                  >
                    <div className={activeItem === 7 ? 'active' : ''}>
                      <S.SubheaderTitle>Identidade visual</S.SubheaderTitle>
                    </div>
                    <S.SubArrow>
                      <img
                        className={activeSubItem === 7 ? 'active' : ''}
                        src="img/arrow.png"
                      />
                    </S.SubArrow>
                  </S.SubheaderTitleWrapper>

                  {activeSubItem === 7 && (
                    <ul>
                      <li>
                        Desenvolvemos a identidade visual única e impactante
                        para a sua empresa, transmitindo de forma visual a
                        essência e valores que a tornam singular no mercado.
                      </li>
                    </ul>
                  )}
                </S.SubHeader>
              </S.DropdownContent>

              <S.DropdownContent>
                <S.SubHeader>
                  <S.SubheaderTitleWrapper
                    onClick={() => handleSubItemClick(8)}
                  >
                    <div className={activeItem === 8 ? 'active' : ''}>
                      <S.SubheaderTitle>Naming</S.SubheaderTitle>
                    </div>
                    <S.SubArrow>
                      <img
                        className={activeSubItem === 8 ? 'active' : ''}
                        src="img/arrow.png"
                      />
                    </S.SubArrow>
                  </S.SubheaderTitleWrapper>

                  {activeSubItem === 8 && (
                    <ul>
                      <li>
                        Desenvolvemos nomes para empreendimentos ou escritórios
                        de arquitetura, levando em consideração toda a
                        engenharia da escolha do nome e o design de sua logo.
                      </li>
                    </ul>
                  )}
                </S.SubHeader>
              </S.DropdownContent>

              <S.DropdownContent>
                <S.SubHeader>
                  <S.SubheaderTitleWrapper
                    onClick={() => handleSubItemClick(9)}
                  >
                    <div className={activeItem === 9 ? 'active' : ''}>
                      <S.SubheaderTitle>Conceito artístico</S.SubheaderTitle>
                    </div>
                    <S.SubArrow>
                      <img
                        className={activeSubItem === 9 ? 'active' : ''}
                        src="img/arrow.png"
                      />
                    </S.SubArrow>
                  </S.SubheaderTitleWrapper>

                  {activeSubItem === 9 && (
                    <ul>
                      <li>
                        Produzimos estudos preliminares arquitetônicos e ideias
                        artísticas. Com uma equipe altamente qualificada de
                        arquitetos, conseguimos criar ideias para o seu negócio.
                      </li>
                    </ul>
                  )}
                </S.SubHeader>
              </S.DropdownContent>

              <S.DropdownContent>
                <S.SubHeader>
                  <S.SubheaderTitleWrapper
                    onClick={() => handleSubItemClick(10)}
                  >
                    <div className={activeItem === 10 ? 'active' : ''}>
                      <S.SubheaderTitle>
                        Estudos arquitetônicos
                      </S.SubheaderTitle>
                    </div>
                    <S.SubArrow>
                      <img
                        className={activeSubItem === 10 ? 'active' : ''}
                        src="img/arrow.png"
                      />
                    </S.SubArrow>
                  </S.SubheaderTitleWrapper>

                  {activeSubItem === 10 && (
                    <ul>
                      <li>
                        Realizamos estudos arquitetônicos detalhados, explorando
                        conceitos inovadores e soluções criativas para moldar o
                        ambiente construído.
                      </li>
                    </ul>
                  )}
                </S.SubHeader>
              </S.DropdownContent>

              <S.DropdownContent>
                <S.SubHeader>
                  <S.SubheaderTitleWrapper
                    onClick={() => handleSubItemClick(11)}
                  >
                    <div className={activeItem === 11 ? 'active' : ''}>
                      <S.SubheaderTitle>Estudo de fachada</S.SubheaderTitle>
                    </div>
                    <S.SubArrow>
                      <img
                        className={activeSubItem === 11 ? 'active' : ''}
                        src="img/arrow.png"
                      />
                    </S.SubArrow>
                  </S.SubheaderTitleWrapper>

                  {activeSubItem === 11 && (
                    <ul>
                      <li>
                        Com uma equipe de arquitetos qualificados, produzimos o
                        design arquitetônico da fachada. A fachada do
                        empreendimento é responsável pelas primeiras impressões
                        do projeto.
                      </li>
                    </ul>
                  )}
                </S.SubHeader>
              </S.DropdownContent>
            </>
          )}
        </S.Dropdown>

        <S.Dropdown>
          <S.Header onClick={() => handleItemClickTwo(103)}>
            <S.HeaderTitleWrapper>
              <S.DropdownHeader onClick={toggleDropdown3}>
                DIVULGAÇÃO
              </S.DropdownHeader>
              <S.Arrow onClick={toggleDropdown3}>
                <img
                  className={activeItemTwo === 103 ? 'active' : ''}
                  src="img/arrow.png"
                />
              </S.Arrow>
            </S.HeaderTitleWrapper>
          </S.Header>

          {dropdownOpen3 && (
            <>
              <S.DropdownContent>
                <S.SubHeader>
                  <S.SubheaderTitleWrapper
                    onClick={() => handleSubItemClick(14)}
                  >
                    <div className={activeItem === 14 ? 'active' : ''}>
                      <S.SubheaderTitle>Websites</S.SubheaderTitle>
                    </div>
                    <S.SubArrow>
                      <img
                        className={activeSubItem === 14 ? 'active' : ''}
                        src="img/arrow.png"
                      />
                    </S.SubArrow>
                  </S.SubheaderTitleWrapper>

                  {activeSubItem === 14 && (
                    <ul>
                      <li>
                        Produzimos páginas web para seu empreendimento e
                        escritório. Sites responsivos são necessários para
                        trazer credibilidade ao seu negócio. Além dos sites
                        profissionais, também desenvolvemos páginas de vendas e
                        landing pages para a captação dos seus leads.
                      </li>
                    </ul>
                  )}
                </S.SubHeader>
              </S.DropdownContent>
            </>
          )}
        </S.Dropdown>
      </S.Wrapper>
    </>
  )
}

export default Test
