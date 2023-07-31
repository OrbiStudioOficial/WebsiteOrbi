import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    text-transform: none;
    background-color: ${theme.colors.primary};
  `}
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.white};
    margin-bottom: 2rem;
    text-transform: uppercase;
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: minmax(auto, 50%) 1fr;
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};
    text-align: left;
    margin-left: 10%;
    width: 80%;
    align-items: center;
    ${media.greaterThan('medium')`
      grid-template-columns: repeat(6, 1fr);
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
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

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
  `}
`

export const Links = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    width: 70%;
    margin-top: 1rem;
    margin-bottom: 2rem;
    a {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.medium};
    }
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
      width: 100%;
    `}
  `}
`
