import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  small: () => css`
    width: 12rem;
    height: 5rem;
  `,

  normal: () => css`
    width: 17rem;
    height: 5rem;
  `,

  large: () => css`
    width: 25rem;
    height: 5rem;
  `,

  white: () => css`
    color: white;
  `,

  primary: () => css`
    color: black;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: auto;
      svg {
        height: 5rem;
        pointer-events: none;
        margin-top: -2rem;
      }
      .text {
        display: none;
      }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors?.[color!]};

    ${!!size && wrapperModifiers[size]}
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
