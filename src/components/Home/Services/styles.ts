import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  background-image: url('img/backgroundservices.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  ${media.lessThan('medium')`
  height: 120rem;
  `}

  ${media.lessThan('small')`
  height: 160rem;
  `}
`

export const SectionAbout = styled.section`
  height: 100%;
  display: flex;

  ${media.lessThan('huge')`
    align-items: center;
    justify-content: center;
  `}
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
    font-size: 4rem;
    padding-top: 3.6rem;
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
    margin: 0 auto;

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
    width: 100%;
    padding-top: 2.4rem;

    ${media.lessThan('huge')`
    width: 85%;
    margin: 0 auto;
  `}
    ${media.lessThan('small')`
  width: 85%;
  `}
  `}
`

export const Phrase2 = styled.h6`
  ${({ theme }) => css`
    font-family: ${theme.font.normal};
    color: ${theme.colors.white};
    text-transform: uppercase;
    padding-top: 2rem;
  `}
`

export const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  justify-items: center;

  ${media.lessThan('huge')`
    grid-template-columns: 1fr;
  `}
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12rem;

  ${media.lessThan('huge')`
    padding-left: 0rem;
    margin-bottom: 5rem;
  `}
`
export const Columntwo = styled.div`
  width: 100rem;

  @media screen and (max-width: 1380px) {
    width: 80rem;
  }

  @media screen and (max-width: 1024px) {
    width: 70rem;
  }
  ${media.lessThan('huge')`
    width: 90%;
  `}
`

interface ButtonProps {
  selected?: boolean
}

export const Button = styled.button<ButtonProps>`
  background: ${(props) => (props.selected ? '#ED533F' : '#4E4E4E')};
  color: ${(props) => (props.selected ? '#ffffff' : '#ccc')};
  padding: 2rem 1rem;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 4px;
  transition: all 0.4s cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  border: none;
  width: 30.5%;
  margin-left: 2rem;

  ${media.lessThan('large')`
  letter-spacing: 0px;
  font-size: 14px;
  width: 28%;
  `}

  ${media.lessThan('medium')`
  width: 90%;
  margin-top: 1rem;
  `}

  ${media.lessThan('small')`
  margin-left: 1rem;
  `}
`
interface SubtitleProps {
  selected?: boolean
}

export const Info = styled.div`
  display: flex;
  min-height: 20rem;
  margin-top: 5rem;

  ${media.lessThan('medium')`
  flex-direction: column;
  `}

  ${media.lessThan('small')`

  `}
`

export const Center = styled.div`
  margin-right: 15rem;
  margin-left: -1.5rem;

  ${media.lessThan('medium')`
  margin-bottom: 5rem;
  `}

  ${media.lessThan('small')`
  margin-left: 1rem;
  margin-right: 0rem;

  `}
`

export const SubtitleAlign = styled.div`
  width: 30rem;
  margin-left: 3.5rem;

  ${media.lessThan('small')`
  width: 100%;
  margin-left: 0;
  `}
`

export const InfoAling = styled.div`
  ${media.lessThan('medium')`
  margin: 0 auto;
  width: 92%;
  `}

  ${media.lessThan('small')`
  width: 90%;
  `}
`

export const Subtitle = styled.p<SubtitleProps>`
  background-color: ${(props) => (props.selected ? '#ED533F' : 'none')};
  padding: 0.72rem;
  display: inline-block;
  color: #ffffff;
  margin: 0;
  font-size: 18px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: #4a24aa;
    transition: all 0.4s cubic-bezier(0.77, 0, 0.175, 1);
  }
`

export const Description = styled.p<SubtitleProps>`
  color: ${(props) => (props.selected ? '#fff' : '#fff')};
`

export const TitleFilter = styled.h5`
  ${({ theme }) => css`
    font-family: ${theme.font.normal};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
    margin: 0;
    text-transform: uppercase;
    padding-bottom: 2rem;
  `}
`
