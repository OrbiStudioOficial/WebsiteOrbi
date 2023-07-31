import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.xsmall} 0;
    position: relative;
    z-index: ${theme.layers.menu};
    ${media.lessThan('medium')`
      background-color: ${theme.colors.primary};
      margin-left: 0;
      padding: 2rem;
    `}
  `}
`

export const LogoWrapper = styled.div`
  display: flex;
  margin: 0;
  flex-grow: 1;
  justify-content: flex-start;
  cursor: pointer;
  margin-left: 10rem;
  ${media.lessThan('medium')`
    position: absolute;
    left: 40%;
    margin: 0rem;
    transform: translateX(-50%);
    svg {
      width: 20rem;
    }
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const MenuGroup = styled.ul`
  display: flex;
  flex-grow: 1;
  justify-content: right;
  align-items: right;
  margin-right: 10rem;
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
        animation: hoverAnimation 0.2s forwards;
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
