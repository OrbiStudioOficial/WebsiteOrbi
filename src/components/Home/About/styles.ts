import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  background-image: url('img/fundointro.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`

export const SectionAbout = styled.section`
  height: 100%;
  display: flex;
`

export const Title = styled.h5`
  ${({ theme }) => css`
    font-family: ${theme.font.normal};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`
export const Title2 = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.font.normal};
    color: ${theme.colors.white};
    font-size: 3rem;
    padding-top: 3.6rem;

    ${media.lessThan('small')`
    font-size: 2rem;
  `}
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

    @media (min-width: 769px) {
      display: none;
    }
  `}
`

export const Phrase1 = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.normal};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.light};
    width: 48%;
    padding-top: 2.4rem;
    ${media.lessThan('large')`
    width: 100%;
  `}
  `}
`

export const Phrase2 = styled.h6`
  ${({ theme }) => css`
    font-family: ${theme.font.normal};
    font-weight: lighter;
    font-size: 16px;
    color: ${theme.colors.white};
    padding-top: 2rem;
  `}
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;

  ${media.lessThan('large')`
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;


  `}
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12rem;

  ${media.lessThan('large')`
    padding-left: 0rem;
    padding-top: 14%;
    width: 85%;

  `}
`
export const Columntwo = styled.div`
  width: 60%;
  height: 75%;
  /* overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 5px;
    border: 1px solid black;
  }

  &::-webkit-scrollbar-track {
    background-color: #fafafa;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background-image: linear-gradient(-45deg, #ed533f, #ed533f);
    border-radius: 50px;
  }

  ${media.lessThan('large')`
    width: 85%;

  `} */
`
