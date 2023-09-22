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
  padding-top: 8%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 11.5rem;

  ${media.lessThan('medium')`
  align-items: left;
  padding: 0;
  `}
`
export const SectionMobile = styled.section`
  ${media.lessThan('medium')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `}
`
export const Phrase1 = styled.h2`
  width: 16%;
  color: #fff;
  font-family: Wix Madefor Display;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (min-width: 2700px) {
    margin-top: -10rem;
  }

  @media (max-width: 1800px) {
    width: 26%;
  }
  ${media.lessThan('huge')`
    font-size: 32px;
    width: 32%;
  `}

  ${media.lessThan('large')`
    font-size: 28px;
    width: 36%;
  `}

  ${media.lessThan('medium')`
    width: 100%;
  `}
`

export const Phrase2 = styled.h4`
  width: 16%;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: #fff;
  font-family: Wix Madefor Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.9px;
  text-transform: uppercase;

  @media (max-width: 1800px) {
    width: 26%;
  }

  ${media.lessThan('huge')`
    font-size: 16px;
    width: 32%;
  `}

  ${media.lessThan('large')`
    width: 36%;
  `}

  ${media.lessThan('medium')`
    width: 100%;
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

    ${media.lessThan('large')`
      font-size: 16px;
    `}
    ${media.lessThan('medium')`
      width: 60%;
      padding-top: 2rem;
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

  @media (max-width: 1800px) {
    width: 60%;
  }

  ${media.lessThan('large')`
  width: 100%;

  `}

  ${media.lessThan('medium')`
  display: none;
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
  padding: 1rem;

  ${media.lessThan('medium')`
    width: 100%;
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
