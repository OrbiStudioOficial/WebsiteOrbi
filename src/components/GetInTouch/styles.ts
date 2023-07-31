import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  text-transform: none;
  align-items: left;
  text-align: left;
`

export const GetInTouchTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primary};
    margin-bottom: 2rem;
    text-transform: uppercase;
  `}
`

export const GetInTouchDescription = styled.h1`
  ${({ theme }) => css`
    width: 40%;
    font-size: ${theme.font.sizes.huge};
    line-height: 5rem;
    color: ${theme.colors.black};
    margin-bottom: 4rem;
    margin-top: 2rem;
    letter-spacing: 0.1rem;
    font-weight: ${theme.font.bold};
    h1::after {
      content: attr(data-text);
      color: ${theme.colors.primary};
      transform: translateX(-100%);
      position: absolute;
    }
    ${media.lessThan('medium')`
      width: 90%;
      font-size: ${theme.font.sizes.xxlarge};
    line-height: ${theme.font.sizes.xxlarge};
    `}
  `}
`
