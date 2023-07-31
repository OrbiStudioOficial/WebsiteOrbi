import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionIntro = styled.section`
  height: 15vh;
  ${media.greaterThan('medium')`
    height: 40vh;
  `}
`

export const SectionGallery = styled.section`
  margin-top: 2rem;
  margin-bottom: 20rem;
  ${media.lessThan('medium')`
    margin-top: 20rem;
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

export const GalleryWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  ${media.greaterThan('medium')`
    width: 100%;
  `}
`

export const GalleryItem = styled.div`
  margin: 1rem;
  margin: auto;
  width: 46%;
  height: 20rem;
  ${media.greaterThan('medium')`
    width: 22%;
    height: 25rem;
  `}
`

export const Image = styled.img`
  width: 100%;
  height: 23rem;
  border-radius: 5px;
  transition: transform 0.7s;
  box-shadow: 5px 5px 15px 8px #ccc;
  object-fit: cover;
  margin: auto;
  cursor: pointer;
  ${media.lessThan('medium')`
    height: 15rem;
    width: 100%;
  `}
  &:hover {
    transform: scale(1.03);
  }
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

export const ModalContent = styled.div`
  width: 40%;
  margin: auto;
  ${media.lessThan('medium')`
    width: 90%;
    height: auto;
  `}
`

export const Content = styled.div`
  width: 100%;
  margin: auto;
  ${media.greaterThan('medium')`
    width: 80%;
    height: auto;
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

export const Phrase2 = styled.h4`
  ${({ theme }) => css`
    width: 90%;
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
      margin-bottom: 5rem;
      line-height: ${theme.font.sizes.xxlarge};
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const ItemWrapper = styled.div`
  ${({ theme }) => css`
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
    width: 90%;
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.xlarge};
    letter-spacing: 0.1rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    ${media.greaterThan('medium')`
      width: 25%;
      text-shadow: none;
      color: ${theme.colors.primary};
      line-height: ${theme.font.sizes.xxlarge};
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`

export const Item = styled.h4`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 5rem;
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.xlarge};
    letter-spacing: 0.1rem;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.primary};
    ${media.greaterThan('medium')`
      width: 80%;
      text-shadow: none;
      color: ${theme.colors.primary};
      margin-top: 0rem;
      margin-bottom: 5rem;
      line-height: ${theme.font.sizes.xlarge};
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

type ModalProps = {
  isOpen: boolean
}

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

export const Modal = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${theme.layers.modal};
    transition: opacity 0.5s;
    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
  `}
`

export const Close = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: right;
  `}
`
