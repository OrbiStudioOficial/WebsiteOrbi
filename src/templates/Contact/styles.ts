import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Container } from 'components/Container'

export const SectionIntro = styled.section`
  ${({ theme }) => css`
    margin: 0 calc(-${theme.grid.gutter} / 2) ${theme.spacings.large};
    ${media.greaterThan('medium')`
      margin-bottom: ${theme.spacings.large};
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`

export const Button = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    margin: auto;
    padding: 1rem;
    width: 100%;
    height: auto;
    font-size: ${theme.font.sizes.small};
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-weight: 600;
    color: ${theme.colors.white};
    background-image: linear-gradient(
      to left,
      #174859,
      #144150,
      #216780,
      #0d2a34
    );
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 10px;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    &:hover {
      background-position: 100% 0;
      moz-transition: all 0.4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;

      background-image: linear-gradient(
        to right,
        #174859,
        #144150,
        #216780,
        #0d2a34
      );
      box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
    }
    &:focus {
      outline: none;
    }
  `}
`

export const Title = styled.section`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.bold};
    margin: auto;
    width: 60%;
    text-align: center;
    margin-top: 10rem;
    color: ${theme.colors.primary};
  `}
`

export const ContactTitle = styled.section`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.bold};
    width: 70%;
    text-align: left;
    margin-top: 5rem;
    margin-bottom: 5rem;
    color: ${theme.colors.primary};
    ${media.lessThan('medium')`
      text-align: left;
      width: 100%;
    `}
  `}
`

export const ContactDescription = styled.section`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.bold};
    width: 70%;
    text-align: left;
    margin-top: 5rem;
    margin-bottom: 5rem;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
    ${media.lessThan('medium')`
      text-align: left;
      width: 80%;
    `}
  `}
`

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    min-height: 80px;
    width: 100%;
    border-radius: 5px;
    padding: 1rem;
    box-sizing: border-box;
    resize: none;
    margin-bottom: 4rem;
    margin-top: 4rem;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xsmall};
    border: 1px solid ${theme.colors.primary};
    &::placeholder {
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const Description = styled.section`
  ${({ theme }) => css`
    padding-top: 2rem;
    padding-bottom: 5rem;
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.normal};
    margin: auto;
    width: 60%;
    text-align: center;
    color: ${theme.colors.primary};
    ${media.lessThan('medium')`
      width: 90%;
    `}
  `}
`

export const ContactForm = styled.div`
  margin-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-bottom: 15rem;
  ${media.greaterThan('medium')`
    height: auto;
    margin-top: 10rem;
    width: 80%;
    align-items: center;
    margin-left: 12%;
  `}
`

export const Email = styled.div`
  margin-left: 0;
  ${media.lessThan('medium')`
    margin-left: 0.5rem;
    margin-bottom: 4rem;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    margin-top: ${theme.spacings.medium};
    gap: 0;
    ${media.greaterThan('medium')`
      gap: ${theme.grid.gutter};
      grid-template-columns: repeat(2, 1fr);
    `}
  `}
`

export const Content2 = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.gray};
      text-decoration: none;
      font-size: ${theme.font.sizes.small};
    }
    a {
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`

export const AboutText = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
      line-height: ${theme.font.sizes.huge};
    `}
  `}
`

export const ContactItem = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin-top: 2rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
      margin-top: 3rem;
      font-weight: ${theme.font.bold};
      color: ${theme.colors.primary};
    `}
  `}
`

export const ContactHeading = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.large} * 2);
    margin-top: calc(${theme.spacings.large} * 1);
    text-align: center;
    ${media.lessThan('medium')`
      text-align: center;
    `}
  `}
`

export const CardContact = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2vh;
    margin: 5px;
    border-radius: 10px;
    ${media.greaterThan('medium')`
      width: 40vh;
      min-height: 404.5px;
      display: flex;
      flex-direction: column;
      padding: 20px;
      margin: 5px;
      border-radius: 10px;
    `}
  `}
`

export const CardTitle = styled.h2`
  ${({ theme }) => css`
    margin: 0px;
    padding: 0px 0px 15px 0px;
    font-size: 30px;
    color: ${theme.colors.primary};
  `}
`

export const CardDivider = styled.hr`
  ${({ theme }) => css`
    display: block;
    border: none;
    height: 3px;
    background-color: ${theme.colors.secondary};
    margin: 0px;
    -webkit-animation-name: line-show;
    /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 0.3s;
    /* Safari 4.0 - 8.0 */
    animation-name: line-show;
    animation-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.795, 0, 0.165, 1);
  `}
`
export const CardDescription = styled.p`
  ${({ theme }) => css`
    margin: 15px 0px 0px 0px;
    text-align: left;
    font-weight: 100;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 1.25;
    font-size: ${theme.spacings.xsmall};
    word-break: keep-all;
    word-wrap: pre-wrap;
    color: ${theme.colors.secondary};
    -webkit-animation-name: p-show;
    /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 1.5s;
    /* Safari 4.0 - 8.0 */
    animation-name: p-show;
    animation-duration: 1.5s;
  `}
`

export const InputName = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`
export const InputEmail = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 0.5em;
  background: papayawhip;
  border: none;

  border-radius: 3px;
`

export const NewInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.primary};
    background: transparent;
    transition: border-color 0.2s;
    padding: 7px 0;

    letter-spacing: 0.1rem;
    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }

    &:focus {
      padding-bottom: 6px;
      font-weight: ${theme.font.light};
      border-width: 3px;
      border-image: linear-gradient(to right, #0d2a34, #d9f5ff);
      border-image-slice: 1;
    }

    &:focus ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: ${theme.font.sizes.xsmall};
      color: #11998e;
      font-weight: ${theme.font.light};
    }

    &:required {
      box-shadow: none;
    }
    &:invalid {
      box-shadow: none;
    }
  `}
`

export const NewInputLabel = styled.label`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: ${theme.colors.primary};
  `}
`

export const NewInputLabelEmail = styled.label`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.primary};
  `}
`

export const InputContainer = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
`
