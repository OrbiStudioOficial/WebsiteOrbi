import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.main`
  height: 100%;
  width: 100%;
  margin-top: 30rem;
  display: flex;
  flex-direction: row-reverse;
  ${media.lessThan('huge')`
  flex-direction: column-reverse;
  display: flex;
  justify-content: center;
  align-items: center;
  `}
  ${media.lessThan('medium')`
  margin-top: 10rem;
  `}
`

export const SectionIntro = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.greaterThan('huge')`
  margin-left: 3rem;
    `}
`

export const Phrase10 = styled.h2`
  ${({ theme }) => css`
    margin-top: 3rem;
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.sizes.huge};
    letter-spacing: 0.1rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    text-transform: uppercase;
    width: 85%;

    ${media.greaterThan('medium')`
      width: 85%;
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
      margin-top: 3rem;
      margin-bottom: -2rem;
      line-height: ${theme.font.sizes.xxlarge};
      font-size: ${theme.font.sizes.large};
    `}

    ${media.lessThan('large')`
    text-align: center;
    width: 100%;
  `}
  `}
`

export const Phrase2 = styled.h4`
  ${({ theme }) => css`
    width: 85%;
    margin-top: 3rem;
    margin-bottom: 5rem;
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.sizes.xxlarge};
    letter-spacing: 0.1rem;
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      width: 85%;
      text-shadow: none;
      color: ${theme.colors.white};
      margin-top: 3rem;
      margin-bottom: 5rem;
      line-height: ${theme.font.sizes.xxlarge};
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const Video = styled.div`
  position: relative;
  top: -25rem;
  padding-bottom: 5rem;

  @media screen and (min-width: 1440px) {
    .video {
      width: 100rem;
    }
  }

  @media screen and (min-width: 2000px) {
    .video {
      width: 110rem;
    }
  }

  @media screen and (max-width: 1575px) {
    .video {
      width: 80rem;
    }
  }
  @media screen and (max-width: 1440px) {
    .video {
      width: 100%;
    }
  }

  ${media.lessThan('huge')`
  top: 0rem;
  left: 0rem;
  `}
`
