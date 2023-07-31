import * as S from './styles'
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'
import { Facebook } from '@styled-icons/boxicons-logos/Facebook'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'

const Socials = () => (
  <S.Wrapper>
    <S.Links>
      <a href="https://api.whatsapp.com/send?phone=554136342110&text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20um%20atendente">
        <Whatsapp size={30} />
      </a>
      <a
        href="https://www.facebook.com/casadeplacas.oficial"
        target="_blank"
        rel="noreferrer"
      >
        <Facebook size={30} />
      </a>
      <a
        href="https://www.instagram.com/casadeplacas/"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram size={30} />
      </a>
    </S.Links>
  </S.Wrapper>
)

export default Socials
