import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'black' | 'primary'
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
  id?: string
}

const Logo = ({ size = 'normal', hideOnMobile = false }: LogoProps) => (
  <S.Wrapper color="white" size={size} hideOnMobile={hideOnMobile}>
    <img src="/img/logoorbi.png" alt="logo orbi" width={160} height={120} />
  </S.Wrapper>
)

export default Logo
