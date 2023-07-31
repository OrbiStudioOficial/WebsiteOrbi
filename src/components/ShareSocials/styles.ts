import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  text-transform: none;
`

export const CategoriesWrapper = styled.div`
  display: flex;
  width: 48%;
  margin-bottom: 4rem;
  flex-wrap: wrap;
`

export const ShareCopy = styled.div`
  display: inline-flex;
  margin-left: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  svg {
    margin-left: 0.7rem;
    margin-top: 0.7rem;
    color: black;
    ${media.greaterThan('medium')`
      margin-left: 1rem;
      margin-top: 0rem;
    `}
  }
`

export const Span = styled.span``

export const Links = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    width: 20%;
    margin-top: 1rem;
    margin-bottom: 2rem;
    display: inline-flex;
    span {
      margin: auto;
      color: ${theme.colors.primary};
      margin-right: 1rem;
      cursor: pointer;
    }
    svg {
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.medium};
      margin-right: 1rem;
    }
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
      width: 5%;
    `}
  `}
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.white};
    margin-bottom: 2rem;
    text-transform: uppercase;
  `}
`

export const PresentationDescription = styled.h1`
  ${({ theme }) => css`
    width: 40%;
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    text-align: left;
    color: ${theme.colors.primary};
    ${media.lessThan('medium')`
      width: 90%;
    `}
  `}
`

export const Description = styled.h1`
  ${({ theme }) => css`
    width: 60%;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    margin-top: 5rem;
    margin-bottom: 5rem;
    ${media.lessThan('medium')`
      width: 90%;
      margin-top: 5rem;
      margin-bottom: 5rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};
    text-align: left;
    width: 100%;
    align-items: center;
    ${media.greaterThan('medium')`
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    button {
      margin-right: 1rem;
      margin-bottom: 2rem;
    }
    a,
    span {
      display: block;
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }
    a {
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`

export const WhatsAppShare = styled.div`
  margin-left: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
`

export const Item = styled.h4`
  align-items: center;
  margin-left: 5rem;
  margin-bottom: 1rem;
  ${media.lessThan('medium')`
    width: 30%;
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    text-transform: uppercase;
    left: 0;
    align-items: left;
    margin: auto;
    margin-left: 0rem;
    text-align: left;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
    ${media.lessThan('medium')`
      width: 100%;
    `};
  `}
`

export const ContentTitle = styled.h4`
  ${({ theme }) => css`
    text-transform: uppercase;
    left: 0;
    align-items: left;
    margin: auto;
    margin-left: 0rem;
    text-align: left;
    margin-top: 3rem;
    font-size: ${theme.font.sizes.xlarge};
    ${media.lessThan('medium')`
      margin-top: 0rem;
      width: 100%;
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const ExtLink = styled.a`
  ${({ theme }) => css`
    text-transform: uppercase;
    right: 0;
    align-items: right;
    margin: auto;
    margin-right: 0rem;
    text-align: right;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    text-decoration: none;
    padding: 7px;
    border-radius: 5px;
    transition: all 0.5s;
    ${media.lessThan('medium')`
      width: 100%;
    `};
    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  `}
`

export const SectionService = styled.div`
  ${({ theme }) => css`
    display: flex;
    grid-template-columns: minmax(auto, 100%) 1fr;
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};
    background-color: ${theme.colors.white};
    margin: auto;
    flex-wrap: wrap;
    ${media.greaterThan('medium')`
      flex-wrap: nowrap;
      grid-template-columns: repeat(3, 1fr);
    `}
  `}
`

export const Image = styled.img`
  display: block;
  height: 30rem;
  width: 60rem;
  border-radius: 15px;
  ${media.lessThan('medium')`
    height: 100%;
    width: 100%;
  `}
`

export const Middle = styled.div`
  border-radius: 15px;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  object-fit: cover;
  height: 53rem;
  margin-top: 3rem;
`

export const SelectedService = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: left;
`

export const Info = styled.div`
  margin-bottom: auto;
  margin-right: auto;
  padding: 2rem;
`

export const Text = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.primary};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
    `}
  `}
`

type NonSelectedFullProps = {
  isOpen: boolean
}

export const NonSelectedServiceContent = styled.div`
  position: relative;
  padding-top: 2vh;
`

export const Button = styled.div<NonSelectedFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    width: auto;
    max-width: 20%;
    flex-wrap: wrap;
    margin: 3rem;
    margin-left: 0;
    margin-right: 3rem;
    border-radius: 5px;
    padding: 1rem;
    background-color: transparent;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    cursor: pointer;
    ${media.lessThan('medium')`
      margin: auto;
      max-width: 50%;
      width: 50%;
      margin-bottom: 2rem;
      ${Text} {
        margin: auto;
      }
    `}
    ${NonSelectedServiceContent} {
      opacity: ${isOpen ? '1' : '0'};
      animation: servicoAnimation 0.5s forwards;
      @keyframes servicoAnimation {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }
  `}
`

export const NonSelectedService = styled.div`
  position: relative;
  display: inline-flex;
  padding-top: 2vh;
  ${media.lessThan('medium')`
    margin: auto;
  `}
  ${Description} {
    color: black;
    text-align: center;
  }
`

export const Hr = styled.hr`
  width: 80%;
  margin-top: 2rem;
  color: black;
`
