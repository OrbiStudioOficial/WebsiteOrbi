import styled from 'styled-components'

export const Footer = styled.footer`
  width: 100%;
  min-height: 15rem;
  background-color: #ee533f;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem;
`

export const Title = styled.h2`
  color: #fff;
  font-weight: bold;
  font-size: 4rem;
`

export const Description = styled.p`
  color: #fff;
  font-weight: regular;
  font-size: 2rem;
`

export const Button = styled.button`
  cursor: pointer;
  border-radius: 4rem;
  border: 1px solid #fff;
  padding: 1rem 7rem;
  background-color: transparent;
  color: #fff;
  font-weight: semibold;
  font-size: medium;

  &:hover {
    background-color: #fff;
    color: #ee533f;
    transition: 0.4s ease-in-out;
  }
`
