import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionSimplePresentation = styled.section`
  margin-top: 10rem;
  margin-bottom: 20rem;
  ${media.lessThan('medium')`
    margin-top: 20rem;
    margin-bottom: 20rem;
  `}
`

export const SectionIntro = styled.section`
  height: auto;
  ${media.greaterThan('medium')`
    height: 20vh;
  `}
`

export const SectionPresentation = styled.section`
  margin-top: 10rem;
  margin-bottom: 20rem;
  ${media.lessThan('medium')`
    margin-top: 20rem;
    margin-bottom: 20rem;
  `}
`

export const SectionPresentationCard = styled.section`
  margin-top: 1rem;
  margin-bottom: 20rem;
  ${media.lessThan('medium')`
    margin-bottom: 20rem;
  `}
`

export const SectionGetInTouch = styled.section`
  margin-top: 10rem;
  margin-bottom: 20rem;
  ${media.lessThan('medium')`
    margin-top: 20rem;
    margin-bottom: 20rem;
  `}
`

export const Content = styled.div`
  width: 100%;
  align-items: left;
  text-align: left;
  margin: auto;
  ${media.greaterThan('medium')`
    width: 80%;
    height: auto;
  `}
`

export const Intro = styled.section`
  ${({ theme }) => css`
    padding: 1.5rem;
    img {
      margin-top: 10rem;
      width: 30rem;
    }
    ${media.greaterThan('medium')`
      position: relative;
      z-index: ${theme.layers.base};
      padding-right: 10vh;
      padding-top: 10vh;
      padding-bottom: 10vh;
      img {
        width: 45rem;
        margin-left: -15rem;
      }
    `}
  `}
`

export const Heading = styled.h3`
  ${({ theme }) => css`
    width: 80%;
    margin-top: 4rem;
    font-size: ${theme.font.sizes.huge};
    line-height: 2.8rem;
    letter-spacing: 0.1rem;
    margin-left: 2rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
    margin-bottom: 0;
    ${media.greaterThan('medium')`
      text-shadow: none;
      width: 60%;
      margin-top: 2rem;
      margin-left: -5rem;
      font-size: 5rem;
      line-height: 5rem;
    `}
  `}
`
