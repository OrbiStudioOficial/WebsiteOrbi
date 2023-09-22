import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  background-image: url('img/backgroundcontact.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`

export const SectionIntro = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 11.5rem;

  ${media.lessThan('large')`
  padding-left: 6rem;
  `}

  ${media.lessThan('small')`
  padding-left: 3rem;
  `}
`

export const Phrase1 = styled.h2`
  width: 24%;
  color: #fff;
  font-family: Wix Madefor Display;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;

  ${media.lessThan('huge')`
    width: 45%;
    font-size: 32px;
  `}

  ${media.lessThan('large')`
    width: 42%;
    font-size: 30px;
  `}

  ${media.lessThan('medium')`
    width: 90%;
  `}

  ${media.lessThan('small')`
  font-size: 24px;
  `}
`

export const Phrase2 = styled.h4`
  width: 16%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #fff;
  font-family: Wix Madefor Display;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.9px;

  ${media.lessThan('huge')`
    width: 32%;
  `}

  ${media.lessThan('large')`
    width: 40%;
  `}

  ${media.lessThan('medium')`
    width: 90%;
  `}

  ${media.lessThan('small')`
  margin-bottom: 1rem;
  margin-top: 1rem;

  `}

  .paragraph {
    color: #fff;
    font-family: Wix Madefor Display;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 1px;
    transition: color 0.3s ease-in-out;
    padding-top: 3rem;
    @media (max-width: 400px) {
      font-size: 14px;
    }

    ${media.lessThan('small')`
    padding-top: 2.5rem;
    padding-bottom: 0.5rem;
  `}
  }

  .paragraph:hover {
    color: #ed533f;
  }
`

export const Ul = styled.ul`
  list-style-type: none;
`

export const Li = styled.li`
  color: #fff;
  font-family: Wix Madefor Display;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  padding-bottom: 1.4rem;

  display: flex;
  width: max-content;

  &:hover {
    color: #ed533f;
    cursor: pointer;
  }
`

export const Infos = styled.div`
  top: 10%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 40%;

  @media screen and (max-width: 1700px) {
    width: 60%;
  }

  ${media.lessThan('large')`
  width: 90%;
  `}

  ${media.lessThan('medium')`
  grid-template-columns: 1fr;
  gap: 5rem;
  top: 3%;
  `}

  ${media.lessThan('small')`
  gap: 3rem;
  `}
`
export const Info = styled.h4`
  position: relative;
  color: #fff;
  font-family: Wix Madefor Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  padding-bottom: 1rem;

  transition: color 0.5s ease-in-out;

  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 193px;
    height: 1px;
    background-color: #fff; /* Cor da linha */
    transform: translateY(100%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::before {
    width: 123px;
  }
`

export const Description = styled.p`
  width: 60%;
  color: #fff;
  font-family: Wix Madefor Display;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.6px;
  text-transform: uppercase;

  ${media.lessThan('small')`
  width: 90%;
  `}
`

export const Button = styled.button`
  max-width: 204.975px;
  height: 37px;
  font-family: Wix Madefor Display;
  font-weight: 900;
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: none;
  color: #000000;

  ${media.lessThan('small')`
  padding: 2rem 1rem;
  `}

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

export const Video = styled.div`
  position: relative;
  top: -25rem;

  @media screen and (max-width: 2000px) {
    .video {
      width: 100rem;
    }
  }

  @media screen and (max-width: 1724px) {
    .video {
      width: 80rem;
    }
  }
`
