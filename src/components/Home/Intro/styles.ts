import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90rem;

  ${media.lessThan('huge')`
  height: 100rem;
  `}

  ${media.lessThan('large')`
  height: 110rem;
  padding: 0 0rem;
  padding-left: 0rem;


  `}
  .video {
    width: 100%;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

export const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 50%;
`
export const GridContainer = styled.div`
  z-index: 2;

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

export const SectionIntro = styled.section`
  ${media.greaterThan('huge')`
  padding: 0rem;
  margin-top: 0rem;
  `}

  ${media.greaterThan('large')`
  padding: 0 12rem;
  margin-top: 15rem;
  `}

  ${media.lessThan('large')`
  padding: 6rem;
  `}
`

export const Phrase10 = styled.h1`
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
export const Phrase2 = styled.h4`
  ${({ theme }) => css`
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
export const Button = styled.button`
  max-width: 204.975px;
  height: 3rem;
  font-family: Wix Madefor Display;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: none;
  color: #000000;
  padding: 2rem 8rem;

  span {
    z-index: 1;
    transition: all 0.3s ease-out;
  }

  &:after,
  &:before {
    width: 0%;
    height: 0%;
    content: '';
    position: absolute;
    border-radius: 100%;
  }

  &:after,
  &:before {
    width: 0%;
    height: 0%;
    content: '';
    position: absolute;
    border-radius: 100%;
  }

  &:after {
    transition: all 0.5s ease;
    background-color: #ed533f;
  }

  &:before {
    transition: all 0.5s ease-out;
    background: #4a25aa;
  }

  .cta-02 {
    background-color: transparent;

    &:after {
      background: linear-gradient(90deg, #4a25aa 100%);
    }
  }

  &:hover {
    &.cta-02 {
      color: white;
    }
    &:after,
    &:before {
      width: 300px;
      height: 300px;
      border-radius: 4px;
    }
    &:after {
      transition: all 0.7s ease-in;
    }

    &:before {
      transition: all 0.5s ease-in;
    }
  }
`
