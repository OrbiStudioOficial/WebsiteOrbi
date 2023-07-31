import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  text-transform: none;
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.white};
    margin-bottom: 2rem;
    text-transform: uppercase;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};
    text-align: left;
    margin-left: 10%;
    width: 80%;
    align-items: center;
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.white};
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

export const Card = styled.div`
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`

export const Image = styled.img`
  width: 100%;
  height: 25rem;
  object-fit: cover;
  background-size: cover;
  border-radius: 10px 10px 0 0;
`

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border-radius: 0 0 10px 10px;
  `}
`

export const CardTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    margin-bottom: 2rem;
    text-transform: uppercase;
  `}
`

export const CardDescription = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.white};
    margin-bottom: 2rem;
    font-weight: ${theme.font.normal};
  `}
`

export const DetailsButton = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    margin-top: 4rem;
    letter-spacing: 0.1rem;
    opacity: 0.8;
    font-weight: ${theme.font.normal};
    transition: all 0.3s ease-in;
    &:hover {
      opacity: 1;
      font-weight: ${theme.font.bold};
      transition: all 0.3s ease-in;
    }
  `}
`
