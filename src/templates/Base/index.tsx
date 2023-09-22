import Menu from 'components/Menu'
import * as S from './styles'
export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <Menu />
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

export default Base
