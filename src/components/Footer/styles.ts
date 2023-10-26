import styled from 'styled-components'
import media from 'styled-media-query'

export const Footer = styled.footer`
  width: 100%;
  min-height: 15rem;
  background-color: #ee533f;

  ${media.lessThan('medium')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  `}

  ${media.lessThan('small')`
  display: flex;
  justify-content: center;
  `}
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;

  ${media.lessThan('medium')`
  padding: 2rem;
  gap: 3rem;

  `}

  ${media.lessThan('small')`
  gap: 1rem;
  `}
`

export const Title = styled.h2`
  color: #fff;
  font-weight: bold;
  font-size: 4rem;

  ${media.lessThan('medium')`
  font-size: 2rem;
  `}
`

export const Description = styled.p`
  color: #fff;
  font-weight: regular;
  font-size: 2rem;

  ${media.lessThan('medium')`
  font-size: 1.25rem;
  `}
`

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid #fff;
  padding: 1rem 7rem;
  background-color: transparent;
  color: #fff;
  font-weight: semibold;
  font-size: medium;

  ${media.lessThan('medium')`
  padding: 2rem;
  max-height: 8rem;
  `}

  &:hover {
    background-color: #fff;
    color: #ee533f;
    transition: 0.4s ease-in-out;
  }
`
