import styled, { css } from 'styled-components'
import media from 'styled-media-query'

interface ButtonProps {
  isHome: boolean
}

export const Fixed = styled.div<ButtonProps>`
  position: ${({ isHome }) => (isHome ? 'absolute' : 'absolute')};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 350px));
  align-items: center;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 100vw;
  margin-top: -2rem;

  ${media.lessThan('large')`
  grid-template-columns: repeat(auto-fit, minmax(50px, 170px));
    `}
`

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    padding: ${theme.spacings.xsmall} 0;
    position: fixed;
    z-index: ${theme.layers.menu};
    height: 100%;
    ${media.lessThan('medium')`
      background-color: transparent;
      margin-left: 0;
      padding: 0;
    `}
  `}
`

export const LogoWrapper = styled.div`
  display: flex;
  margin: 0;
  flex-grow: 1;
  justify-content: flex-start;
  cursor: pointer;
  margin-left: 8.5rem;
  width: 22rem;
  height: 15rem;

  ${media.lessThan('medium')`
    position: absolute;
    top: -1rem;
    left: 3rem;
    margin-left: 0;
    width: 100%;
    height: auto;
  `}

  ${media.lessThan('small')`
    left: 0rem;
  `}
`

export const LogoWrappertwo = styled.div`
  display: flex;
  margin: 0;
  flex-grow: 1;
  justify-content: flex-start;
  cursor: pointer;
  margin-left: 8.5rem;
  width: 22rem;
  height: 15rem;
  ${media.lessThan('medium')`
    position: absolute;
    top: -1rem;
    left: 0;
    margin-left: 0;
    width: 100%;
    height: auto;
    display: none;
  `}

  ${media.lessThan('large')`
  margin-left: 4rem;
    `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: absolute;
    right: 4rem;
    top: 4rem;
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;

    ${media.greaterThan('medium')`
    right: 6rem;
  `}
  `}
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  ${media.lessThan('medium')`
    display: none;
  `}

  ${media.lessThan('large')`
  margin-left: 7.5rem;
  width: 100%;
    `}
`

export const TitleMenu = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    ${media.lessThan('large')`
  font-size: 2rem;
    `}
  `}
`
export const SubtitleMenu = styled.h6`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.white};
  `}
`

export const MenuGroup = styled.ul`
  display: flex;
  flex-grow: 1;
  justify-content: left;
  align-items: left;

  ${media.lessThan('medium')`
  display: none;
  `}

  ${media.lessThan('large')`
  margin-left: 5.5rem;
    `}
`

export const MenuButtonGroup = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    width: 100%;
    ${media.greaterThan('medium')`
			margin-left: ${theme.spacings.small};
		`}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.white};
        ${media.greaterThan('medium')`
          background-color: ${theme.colors.white};
        `}
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.black};
    position: fixed;
    z-index: ${theme.layers.menu};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    .bnt-close {
      position: absolute;
      top: 3%;
      right: 6%;
    }
    > svg {
      position: absolute;
      top: 0;
      right: 3rem;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
      color: ${theme.colors.white};
    }
    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }
    ${MenuLink} {
      color: ${theme.colors.white};
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
    ${DropDownHeader} {
      color: ${theme.colors.white};
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
      &:hover {
        font-weight: ${theme.font.normal};
      }
    }
    ${IconHeader} {
      position: absolute;
      width: 2rem;
      opacity: 0.9;
      margin-left: 13rem;
      margin-top: -2.7rem;
    }
    ${DropDownList} {
      padding-left: 1rem;
      margin: 0;
      box-sizing: border-box;
      color: ${theme.colors.white};
      letter-spacing: 0.4rem;
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.light};
      &:first-child {
        margin-top: -2rem;
      }
    }
  `}
`

export const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`

export const StyledLi = styled.li`
  margin: 0rem;
`

export const Dropbtn = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    text-align: center;
    text-decoration: none;
    color: ${theme.colors.primary};
    font-weight: bold;
    font-size: ${theme.font.sizes.large};
    ${media.greaterThan('medium')`
		`}
  `}
`

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`

export const DropDownLi = styled(StyledLi)`
  ${({ theme }) => css`
    display: inline-block;
    text-transform: uppercase;
    color: ${theme.colors.primary};
    margin: 0.3rem ${theme.spacings.small} 0;
    &:hover {
      cursor: pointer;
    }
    &:hover ${DropDownContent} {
      display: block;
    }
  `}
`

export const StyledA = styled.a`
  display: inline-block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`

export const SubA = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    &:hover {
      background-color: #f1f1f1;
    }
  `}
`

type MenuHeaderFullProps = {
  ToggleOpen: boolean
}

export const DropDownHeader = styled.a<MenuHeaderFullProps>`
  ${({ theme, ToggleOpen }) => css`
    cursor: pointer;
    position: relative;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    text-transform: uppercase;
    text-align: left;
    padding-right: 5rem;
    ${IconHeader} {
      transform: ${ToggleOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
      transition: transform 0.3s ease-in-out;
    }
    ${media.lessThan('medium')`
      padding-right: 0rem;
      text-align: center;
    `}
  `}
`

export const IconHeader = styled.div`
  position: relative;
  width: 2rem;
  opacity: 0.8;
  margin-left: 15rem;
  margin-top: -2.8rem;
`

export const ListItem = styled.li`
  ${({ theme }) => css`
    list-style: none;
    cursor: pointer;
    margin-bottom: 0.2em;
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    letter-spacing: 0.2rem;
    ${media.lessThan('medium')`
      padding: 0.8rem;
      color: ${theme.colors.white};
    `}
  `}
`

export const DropDownListContainer = styled.div`
  cursor: pointer;
  text-transform: capitalize;
  padding-bottom: 1rem;
  padding-left: 0.8rem;
  ${media.lessThan('medium')`
    padding-left: 0rem;
    text-align: center;
  `}
`

export const DropDownList = styled.ul`
  ${({ theme }) => css`
    margin: 0;
    box-sizing: border-box;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    &:first-child {
      margin-top: 0rem;
  `}
`

export const StyledMenuLink = styled.a<{ active: boolean }>`
  color: ${(props) => (props.active ? '#ED533F' : '#FFF')};
  padding-left: 2rem;
  text-decoration: none;
  font-family: Wix Madefor Display;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;

  ${media.lessThan('large')`
  font-size: 14px;
  padding-left: 1.2rem;
    `}
`
