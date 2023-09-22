import * as S from './styles'
import { useState } from 'react'

const Test = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<number | null>(null)
  const [activeSubItem, setActiveSubItem] = useState<number | null>(null)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
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
                      <S.SubheaderTitle>IDENTIDADE VISUAL</S.SubheaderTitle>
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
            </>
          )}
        </S.Dropdown>
      </S.Wrapper>
    </>
  )
}

export default Test
