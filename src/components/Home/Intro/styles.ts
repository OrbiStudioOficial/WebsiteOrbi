import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90rem;
  padding: 0 12rem;

  ${media.lessThan('huge')`
  height: 100rem;
  `}

  ${media.lessThan('large')`
  height: 110rem;

  `}
`
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  width: 100%;

  ${media.lessThan('huge')`
    align-items: left;
    grid-template-columns: 1fr;
  `}
`

export const SectionIntro = styled.section``

export const Phrase10 = styled.h2`
  ${({ theme }) => css`
    margin-top: 3rem;
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.sizes.huge};
    letter-spacing: 0.1rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    text-transform: uppercase;

    ${media.greaterThan('medium')`

      text-shadow: none;
      color: ${theme.colors.white};
      margin-top: 3rem;
      margin-bottom: -2rem;
      line-height: ${theme.font.sizes.xxlarge};
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
export const Phrase1 = styled.h2`
  ${({ theme }) => css`
    margin-top: 3rem;
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.sizes.huge};
    letter-spacing: 0.1rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    text-transform: uppercase;
    width: 90%;
    cursor: pointer;

    &:hover {
      color: #ed533e;
      transition: 0.2s;
    }
    ${media.greaterThan('medium')`
      width: 80%;
      text-shadow: none;
      color: ${theme.colors.white};
      line-height: ${theme.font.sizes.xxlarge};
      font-size: ${theme.font.sizes.large};
    `}

    ${media.lessThan('large')`
    width: 100%;
  `}
  `}
`

export const Phrase2 = styled.h4`
  ${({ theme }) => css`
    width: 60rem;
    margin-top: 3rem;
    margin-bottom: 5rem;
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.sizes.xxlarge};
    letter-spacing: 0.1rem;
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      width: 60rem;
      text-shadow: none;
      color: ${theme.colors.white};
      margin-top: 3rem;
      margin-bottom: 5rem;
      line-height: ${theme.font.sizes.xxlarge};
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
