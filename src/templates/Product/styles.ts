import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionDetails = styled.section`
  height: auto;
  margin-top: 10rem;
  margin-left: 2rem;
  ${media.greaterThan('medium')`
    margin-left: 0;
    height: 70vh;
  `}
`

export const Title = styled.h5`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 5rem;
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.medium};
    letter-spacing: 0.1rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
    ${media.greaterThan('medium')`
      width: 60%;
      text-shadow: none;
      color: ${theme.colors.primary};
      margin-top: 3rem;
      margin-bottom: 5rem;
      line-height: ${theme.font.sizes.xxlarge};
      font-size: ${theme.font.sizes.small};
    `}
  `}
`

export const Phrase1 = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 1rem;
    font-size: ${theme.font.sizes.xxlarge};
    line-height: ${theme.font.sizes.xxlarge};
    letter-spacing: 0.1rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
    ${media.greaterThan('medium')`
      width: 46%;
      text-shadow: none;
      color: ${theme.colors.primary};
      margin-top: 3rem;
      margin-bottom: 5rem;
      line-height: ${theme.font.sizes.huge};
      font-size: ${theme.font.sizes.huge};
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

export const AboutImage = styled.img`
  width: 50rem;
  height: 30rem;
  border-radius: 10px;
  ${media.lessThan('medium')`
      width: 100%;
      height: 100%;
  `}
`

export const SectionIntro = styled.section`
  height: 40vh;
  ${media.greaterThan('medium')`
    height: 20vh;
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

export const SectionPresentation = styled.section`
  margin-top: 10rem;
  margin-bottom: 20rem;
  ${media.lessThan('medium')`
    margin-top: 20rem;
    margin-bottom: 20rem;
  `}
`

export const SectionWhoIsUs = styled.section`
  height: 100vh;
  ${media.greaterThan('medium')`
    height: 90vh;
  `}
`

export const SectionWhyUs = styled.section`
  height: 100vh;
  ${media.greaterThan('medium')`
    height: 70vh;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};
    text-align: left;
    width: 80%;
    align-items: center;
    ${media.greaterThan('medium')`
      grid-template-columns: 70% 50%;
    `}
  `}
`

export const Pages = styled.div`
  position: relative;
  margin-top: 20vh;
  display: inline-flex;
  ${media.lessThan('medium')`
    margin-top: 8vh;
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
    margin-right: 5rem;
    text-decoration: none;
    font-weight: ${theme.font.normal};
    text-align: center;
    cursor: pointer;
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
      margin-right: 2rem;
      color: ${theme.colors.white};
      text-shadow: 1px 1px 2px black;
    `}
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
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

export const Email = styled.div`
  ${({ theme }) => css`
    width: 100vh;
    height: 100vh;
    align-items: center;
    text-align: center;
    transform: rotate(-90deg);
    background-color: none;
    position: absolute;
    top: 5vh;
    left: 5%;
    border-radius: 30px 0px 0px 30px;
    h1 {
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.xxlarge};
      letter-spacing: 0.2rem;
      font-weight: ${theme.font.normal};
      color: ${theme.colors.primary};
    }
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

export const SupportButton = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    padding: 1.5rem;
    width: 25rem;
    height: auto;
    font-size: ${theme.font.sizes.small};
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-weight: 600;
    color: ${theme.colors.white};
    background-image: linear-gradient(
      to left,
      #174859,
      #144150,
      #216780,
      #0d2a34
    );
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 10px;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    ${media.lessThan('medium')`
      width: 22rem;
      height: 4rem;
      font-size: ${theme.font.sizes.xsmall};
    `}
    &:hover {
      background-position: 100% 0;
      moz-transition: all 0.4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;

      background-image: linear-gradient(
        to right,
        #174859,
        #144150,
        #216780,
        #0d2a34
      );
      box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
    }
    &:focus {
      outline: none;
    }
  `}
`

export const Divider = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} auto ${theme.spacings.xsmall};
    height: 0.1rem;
    border: 0;

    ${media.greaterThan('medium')`
      margin: calc(${theme.spacings.small}  0.1) auto ${theme.spacings.small};
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
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
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

export const Background = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  background-size: cover;
  height: 60vh;
  ${media.lessThan('medium')`
    height: 40vh;
  `}
`

export const Hr = styled.hr`
  width: 100%;
  ${media.greaterThan('medium')`
      width: 60%;
    `}
`

export const Phrase2 = styled.h4`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 5rem;
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.sizes.xxlarge};
    letter-spacing: 0.1rem;
    font-weight: ${theme.font.light};
    color: ${theme.colors.primary};
    ${media.greaterThan('medium')`
      width: 60%;
      text-shadow: none;
      color: ${theme.colors.primary};
      margin-top: 3rem;
      margin-bottom: 3rem;
      line-height: ${theme.font.sizes.xxlarge};
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`

export const ItemWrapper = styled.div`
  ${({ theme }) => css`
    border-left: 1px solid ${theme.colors.primary};
    padding-left: 2rem;
    margin-bottom: 5rem;
    span {
      background-color: ${theme.colors.primary};
      width: 10px;
      height: 10px;
      margin-left: -5px;
      margin-top: -10px;
      border-radius: 50%;
    }
    ${media.lessThan('medium')`
      padding-left: 1rem;
      span {
        background-color: ${theme.colors.primary};
        width: 10px;
        height: 10px;
        margin-left: -15px;
        margin-top: -10px
        border-radius: 50%;
      }
    `}
  `}
`

export const ItemHeader = styled.h1`
  ${({ theme }) => css`
    display: inline-flex;
    width: 60%;
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.xlarge};
    letter-spacing: 0.1rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    ${media.greaterThan('medium')`
      width: 80%;
      text-shadow: none;
      color: ${theme.colors.primary};
      line-height: ${theme.font.sizes.xlarge};
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`

export const Item = styled.h4`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.xlarge};
    letter-spacing: 0.1rem;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.primary};
    ${media.greaterThan('medium')`
      width: 80%;
      text-shadow: none;
      color: ${theme.colors.primary};
      margin-top: 3rem;
      margin-bottom: 2rem;
      line-height: ${theme.font.sizes.xlarge};
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`
