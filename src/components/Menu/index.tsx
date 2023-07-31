import Link from 'next/link'

import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>
      <MediaMatch greaterThan="medium">
        <Link href="/">
          <S.LogoWrapper>
            <Logo size="normal" hideOnMobile />
          </S.LogoWrapper>
        </Link>
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <S.LogoWrapper>
          <Logo color="white" size="normal" hideOnMobile />
        </S.LogoWrapper>
      </MediaMatch>

      <S.MenuGroup>
        <MediaMatch greaterThan="medium">
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/sobre" passHref>
            <S.MenuLink>Sobre</S.MenuLink>
          </Link>
          <Link href="/produtos" passHref>
            <S.MenuLink>Produtos</S.MenuLink>
          </Link>
          {/* <Link href="/comunicados" passHref>
            <S.MenuLink>Comunicados</S.MenuLink>
          </Link> */}
          <Link href="/galeria" passHref>
            <S.MenuLink>Galeria</S.MenuLink>
          </Link>
          <Link href="/contato" passHref>
            <S.MenuLink>Contato</S.MenuLink>
          </Link>
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/sobre" passHref>
            <S.MenuLink>Sobre</S.MenuLink>
          </Link>
          <Link href="/produtos" passHref>
            <S.MenuLink>Produtos</S.MenuLink>
          </Link>
          {/* <Link href="/comunicados" passHref>
            <S.MenuLink>Comunicados</S.MenuLink>
          </Link> */}
          <Link href="/galeria" passHref>
            <S.MenuLink>Galeria</S.MenuLink>
          </Link>
          <Link href="/contato" passHref>
            <S.MenuLink>Contato</S.MenuLink>
          </Link>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
