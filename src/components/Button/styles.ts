import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'whiteButton' | 'minimal'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    width: 20rem;
    height: 4rem;
    font-size: ${theme.font.sizes.xxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    width: 25rem;
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  whiteButton: () => css`
    color: #002759;
    border: 0.2px solid #002759;
    background-image: linear-gradient(
      to left,
      #fafafa,
      #fafafa,
      #fafafa,
      #fafafa
    );
    &:hover {
      background-position: 100% 0;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
      background-image: linear-gradient(
        to right,
        #fafafa,
        #fafafa,
        #fafafa,
        #fafafa
      );
      box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
    }
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};
    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, whiteButton, hasIcon, minimal, disabled }) => css`
    cursor: pointer;
    width: 35rem;
    height: auto;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    text-align: center;
    border: none;
    background-size: 300% 100%;
    background-image: linear-gradient(
      to left,
      #4e6e97,
      #305686,
      #1e4576,
      #002759
    );
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    &:focus {
      box-shadow: 0 0 0 3px ${theme.colors.secondary};
      outline: none;
    }
    &:hover {
      background-position: 100% 0;
      moz-transition: all 0.4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
      background-image: linear-gradient(
        to right,
        #4e6e97,
        #305686,
        #1e4576,
        #002759
      );
      box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
    }
    ${!!size && wrapperModifiers[size](theme)};
    ${!!whiteButton && wrapperModifiers.whiteButton()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!minimal && wrapperModifiers.minimal(theme)};
    ${disabled && wrapperModifiers.disabled()};
  `}
`
