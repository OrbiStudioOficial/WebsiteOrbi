import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.xsmall};
    }

    .slick-next {
      right: -${theme.spacings.xsmall};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-slide > div {
      margin: 0 0.5rem 0 0.5rem;
      cursor: pointer;
    }

    .slick-list {
      margin: 0 ${theme.spacings.xsmall};
    }
  `}
`

type ModalProps = {
  isOpen: boolean
}

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

export const Modal = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${theme.layers.modal};
    transition: opacity 0.5s;

    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
  `}
`
export const SelectedImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    object-fit: cover;
    width: 100%;
    height: 28rem;
  }
  ${media.greaterThan('medium')`
    img {
      width: 100%;
      height: 35rem;
      object-fit: cover;
  }
  `}
`

export const NonSelectedImage = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  padding-top: 2vh;
  background-color: transparent;
  img {
    width: 100%;
    height: 5rem;
    object-fit: cover;
  }
`

export const Close = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: right;
  `}
`

export const Content = styled.div`
  max-width: min(120rem, 100%);
  max-height: 80rem;
`
