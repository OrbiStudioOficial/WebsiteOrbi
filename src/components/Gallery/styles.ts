import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100%;
`
export const GalleryContainer = styled.div`
  margin-top: 32rem;
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1660px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const GalleryItem = styled.div`
  position: relative;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`

export const Front = styled.div`
  display: block;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 0.5s;
`

export const Info = styled.div`
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 0.5s;

  position: absolute;
  opacity: 0;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  &:hover {
    opacity: 1;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`
export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Title = styled.h4`
  color: #fff;
  font-family: Wix Madefor Display;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.4px;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const Description = styled.p`
  color: #fff;
  font-family: Wix Madefor Display;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`
export const Button = styled.button`
  border: none;
  width: 221px;
  height: 25px;
  flex-shrink: 0;
  background: #f2f2f2;

  @media screen and (max-width: 768px) {
    font-size: 10px;
    height: 22px;
  }

  color: #161616;
  text-align: center;
  font-family: Wix Madefor Display;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.6px;
  text-transform: uppercase;
`
