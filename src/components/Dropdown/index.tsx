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
                      <S.SubheaderTitle>IDENTIDADE VISUAL</S.SubheaderTitle>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec interdum tempus lacus. Vestibulum eu tellus
                        bibendum, convallis risus quis, lobortis libero.
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
                      <S.SubheaderTitle>NAMING</S.SubheaderTitle>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec interdum tempus lacus. Vestibulum eu tellus
                        bibendum, convallis risus quis, lobortis libero.
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
                      <S.SubheaderTitle>CONCEITO ARTÍSTICO</S.SubheaderTitle>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec interdum tempus lacus. Vestibulum eu tellus
                        bibendum, convallis risus quis, lobortis libero.
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
                      <S.SubheaderTitle>
                        ESTUDOS ARQUITETÔNICOS
                      </S.SubheaderTitle>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec interdum tempus lacus. Vestibulum eu tellus
                        bibendum, convallis risus quis, lobortis libero.
                      </li>
                    </ul>
                  )}
                </S.SubHeader>
              </S.DropdownContent>

              <S.DropdownContent>
                <S.SubHeader>
                  <S.SubheaderTitleWrapper
                    onClick={() => handleSubItemClick(5)}
                  >
                    <div className={activeItem === 5 ? 'active' : ''}>
                      <S.SubheaderTitle>ESTUDO DE FACHADA</S.SubheaderTitle>
                    </div>
                    <S.SubArrow>
                      <img
                        className={activeSubItem === 5 ? 'active' : ''}
                        src="img/arrow.png"
                      />
                    </S.SubArrow>
                  </S.SubheaderTitleWrapper>

                  {activeSubItem === 5 && (
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec interdum tempus lacus. Vestibulum eu tellus
                        bibendum, convallis risus quis, lobortis libero.
                      </li>
                    </ul>
                  )}
                </S.SubHeader>
              </S.DropdownContent>

              <S.DropdownContent>
                <S.SubHeader>
                  <S.SubheaderTitleWrapper
                    onClick={() => handleSubItemClick(6)}
                  >
                    <div className={activeItem === 6 ? 'active' : ''}>
                      <S.SubheaderTitle>IDENTIDADE VISUAL</S.SubheaderTitle>
                    </div>
                    <S.SubArrow>
                      <img
                        className={activeSubItem === 6 ? 'active' : ''}
                        src="img/arrow.png"
                      />
                    </S.SubArrow>
                  </S.SubheaderTitleWrapper>

                  {activeSubItem === 6 && (
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec interdum tempus lacus. Vestibulum eu tellus
                        bibendum, convallis risus quis, lobortis libero.
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
                      <S.SubheaderTitle>IDENTIDADE VISUAL</S.SubheaderTitle>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec interdum tempus lacus. Vestibulum eu tellus
                        bibendum, convallis risus quis, lobortis libero.
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
                      <S.SubheaderTitle>NAMING</S.SubheaderTitle>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec interdum tempus lacus. Vestibulum eu tellus
                        bibendum, convallis risus quis, lobortis libero.
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
                      <S.SubheaderTitle>CONCEITO ARTÍSTICO</S.SubheaderTitle>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec interdum tempus lacus. Vestibulum eu tellus
                        bibendum, convallis risus quis, lobortis libero.
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
                        ESTUDOS ARQUITETÔNICOS
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec interdum tempus lacus. Vestibulum eu tellus
                        bibendum, convallis risus quis, lobortis libero.
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
                      <S.SubheaderTitle>ESTUDO DE FACHADA</S.SubheaderTitle>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec interdum tempus lacus. Vestibulum eu tellus
                        bibendum, convallis risus quis, lobortis libero.
                      </li>
                    </ul>
                  )}
                </S.SubHeader>
              </S.DropdownContent>

              <S.DropdownContent>
                <S.SubHeader>
                  <S.SubheaderTitleWrapper
                    onClick={() => handleSubItemClick(12)}
                  >
                    <div className={activeItem === 12 ? 'active' : ''}>
                      <S.SubheaderTitle>IDENTIDADE VISUAL</S.SubheaderTitle>
                    </div>
                    <S.SubArrow>
                      <img
                        className={activeSubItem === 12 ? 'active' : ''}
                        src="img/arrow.png"
                      />
                    </S.SubArrow>
                  </S.SubheaderTitleWrapper>

                  {activeSubItem === 12 && (
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec interdum tempus lacus. Vestibulum eu tellus
                        bibendum, convallis risus quis, lobortis libero.
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
                    onClick={() => handleSubItemClick(13)}
                  >
                    <div className={activeItem === 13 ? 'active' : ''}>
                      <S.SubheaderTitle>IDENTIDADE VISUAL</S.SubheaderTitle>
                    </div>
                    <S.SubArrow>
                      <img
                        className={activeSubItem === 13 ? 'active' : ''}
                        src="img/arrow.png"
                      />
                    </S.SubArrow>
                  </S.SubheaderTitleWrapper>

                  {activeSubItem === 13 && (
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec interdum tempus lacus. Vestibulum eu tellus
                        bibendum, convallis risus quis, lobortis libero.
                      </li>
                    </ul>
                  )}
                </S.SubHeader>
              </S.DropdownContent>

              <S.DropdownContent>
                <S.SubHeader>
                  <S.SubheaderTitleWrapper
                    onClick={() => handleSubItemClick(14)}
                  >
                    <div className={activeItem === 14 ? 'active' : ''}>
                      <S.SubheaderTitle>NAMING</S.SubheaderTitle>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec interdum tempus lacus. Vestibulum eu tellus
                        bibendum, convallis risus quis, lobortis libero.
                      </li>
                    </ul>
                  )}
                </S.SubHeader>
              </S.DropdownContent>

              <S.DropdownContent>
                <S.SubHeader>
                  <S.SubheaderTitleWrapper
                    onClick={() => handleSubItemClick(15)}
                  >
                    <div className={activeItem === 15 ? 'active' : ''}>
                      <S.SubheaderTitle>CONCEITO ARTÍSTICO</S.SubheaderTitle>
                    </div>
                    <S.SubArrow>
                      <img
                        className={activeSubItem === 15 ? 'active' : ''}
                        src="img/arrow.png"
                      />
                    </S.SubArrow>
                  </S.SubheaderTitleWrapper>

                  {activeSubItem === 15 && (
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec interdum tempus lacus. Vestibulum eu tellus
                        bibendum, convallis risus quis, lobortis libero.
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
