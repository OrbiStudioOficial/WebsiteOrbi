import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  background-image: url('img/background-05.png');
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1600px) {
    height: 110rem;
  }

  ${media.lessThan('large')`
    background-color: #000000;
    background-image: none;
  `}
`

export const Center = styled.div`
  width: 30%;

  @media (max-width: 1800px) {
    width: 100%;
    margin-bottom: 5rem;
  }

  ${media.lessThan('huge')`
  width: 90%;
  `}

  ${media.lessThan('medium')`
  margin: 0;
  width: 90%;
  margin: 0 auto;
  `}

  ${media.lessThan('small')`
  width: 90%;
  margin: 0 auto;
  `}
`
export const Info = styled.div`
  padding-top: 10%;
  display: flex;
  align-items: baseline;
  flex-direction: row;
  padding-left: 11.5rem;
  width: 100%;

  ${media.lessThan('large')`
  padding-top: 0%;
  padding-left: 8rem;
  `}

  ${media.lessThan('medium')`
  padding-left: 0rem;
  padding-top: 0%;
  `}

  @media (max-width: 1800px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`

export const Phrase1 = styled.h2`
  width: 40%;
  color: #fff;
  font-family: Wix Madefor Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-bottom: 2rem;

  @media (max-width: 2100px) {
    margin-top: 10rem;
    width: 70%;
  }

  @media (max-width: 1800px) {
    margin-top: 15rem;
  }

  ${media.lessThan('huge')`
  margin-top: 20rem;
  width: 100%;
  `}

  ${media.lessThan('large')`
  font-size: 1.8rem;
  `}
`

export const Phrase2 = styled.h4`
  width: 75%;
  color: #fff;
  font-family: Wix Madefor Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.9px;

  ${media.lessThan('huge')`
  width: 100%;
  `}

  ${media.lessThan('large')`
  font-size: 1.8rem;
  `}

  ${media.lessThan('medium')`
  font-size: 1.8rem;
  `}
`

export const PhraseBottom = styled.h4`
  width: 60%;
  color: #fff;
  font-family: Wix Madefor Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.9px;

  ${media.lessThan('huge')`
  width: 100%;
  `}

  ${media.lessThan('large')`
  font-size: 1.8rem;
  `}

  ${media.lessThan('medium')`
  width: 90%;
  font-size: 1.8rem;
  `}
`
export const Mobile = styled.div``

export const BoxMobile = styled.div`
  display: none;

  ${media.lessThan('medium')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  background-color: #4A25AA;
  height: 30rem;
  width: 90%;
  margin: 0 auto;
  margin-top: 2rem;

  ${media.lessThan('small')`
  height: 40rem;
  width: 90%;
  `}

  `}
`

export const BoxMobileOrange = styled.div`
  display: none;

  ${media.lessThan('medium')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  background-color: #ee533f;
  height: 6rem;
  width: 90%;
  margin: 0 auto;
  margin-top: 2rem;
  `}
`

export const Title2 = styled.h4`
  color: #fff;
  font-family: Wix Madefor Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  width: 90%;
`
export const TitleOrange = styled.h4`
  color: #fff;
  font-family: Wix Madefor Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  width: 90%;
`
