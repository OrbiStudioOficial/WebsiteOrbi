import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Test = styled.main`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  left: 0;
  top: 0;

  ${media.lessThan('large')`
  display: none;
  `}
`
export const Container = styled.div`
  width: 200%;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
`

export const Panel = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('img/background-06.png');
  background-repeat: no-repeat;
  background-size: cover;

  ${media.lessThan('large')`
  background-image: none;
  `}
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  padding-left: 11.5rem;
  padding-top: 10rem;

  ${media.lessThan('large')`
  padding-left: 0;
  margin-top: 25rem;
  flex-direction: column;
  gap: 10rem;
  `}

  ${media.lessThan('medium')`
  margin-top: 8rem;
  `}
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-shrink: 0;
  flex-basis: 40%;

  @media (max-width: 1920px) {
    flex-basis: 50%;
  }

  ${media.lessThan('large')`
    width: 80%;
`}

  ${media.lessThan('huge')`
    flex-basis: 60%;
`}
`
export const Phrase1 = styled.h2`
  color: #fff;
  font-family: Wix Madefor Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 1.2px;
  text-transform: uppercase;

  @media (max-width: 1920px) {
    font-size: 18px;
  }
`

export const Phrase3 = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.normal};
    color: ${theme.colors.white};
    text-transform: uppercase;
    padding-top: 2rem;
    font-weight: 200;
    font-size: 18px;
    width: 60%;

    @media (max-width: 1920px) {
      font-size: 16px;
    }

    ${media.lessThan('large')`
    width: 100%;
    `}
  `}
`

export const Columntwo = styled.div`
  position: relative;
  left: -10%;
`
export const Rows = styled.div`
  width: 80%;
  height: 62rem;
  margin-left: 20%;
  overflow-y: scroll;

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
  display: flex;
    flex-direction: column;
    gap: 5rem;
    overflow-y: hidden;
    height: 100%;
  `}
`

export const Desktop = styled.div`
  ${media.lessThan('large')`
  display: none;
`}
`

export const Title2 = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.font.normal};
    color: ${theme.colors.white};
    font-size: 42px;
    padding-top: 3.6rem;
    text-transform: uppercase;

    @media (max-width: 1920px) {
      font-size: 36px;
    }

    ${media.lessThan('large')`
    width: 80%;
  `}

    ${media.lessThan('medium')`
  font-size: 24px;
  `}

    @media (max-width: 300px) {
      font-size: 16px;
    }

    @media (max-width: 200px) {
      font-size: 12px;
    }
  `}
`
export const Phrase2 = styled.h6`
  ${({ theme }) => css`
    font-family: ${theme.font.normal};
    color: ${theme.colors.white};
    text-transform: uppercase;
    padding-top: 2rem;
    font-weight: 200;
    font-size: 18px;
    width: 60%;

    @media (max-width: 1920px) {
      font-size: 16px;
      width: 80%;
    }

    ${media.lessThan('medium')`
    font-size: 14px;

  `}

    @media (max-width: 300px) {
      font-size: 10px;
    }
  `}
`
export const Mobile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`

export const BoxMobile = styled.div`
  display: none;

  ${media.lessThan('large')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  background-color: #4A25AA;
  height: 30rem;

  ${media.lessThan('small')`
  height: 35rem;
  `}

  @media (max-width: 300px) {
    height: 40rem;
    }
  `}
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;

  ${media.lessThan('medium')`
  grid-template-columns: repeat(1, 1fr);
  margin: 0 auto;

  `}
`

export const Box = styled.div`
  ${media.lessThan('medium')`
  grid-template-columns: repeat(1, 1fr);
  margin: 0 auto;
  `}
`
