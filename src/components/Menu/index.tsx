import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

interface RouteInfo {
  title: string
  subtitle: string
}

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [titleMenu, setTitleMenu] = useState('')
  const [subtitleMenu, setSubtitleMenu] = useState('')

  const [menuGroup, setMenuGroup] = useState(true)

  const router = useRouter()

  useEffect(() => {
    const routeData: Record<string, RouteInfo> = {
      '/servicos': {
        title: 'SERVIÇOS',
        subtitle: 'QUE POTENCIALIZAM OS SEUS PROJETOS.'
      },
      '/galeria': {
        title: 'PROJETOS',
        subtitle: 'NÓS CAPACITAMOS PROJETOS'
      },
      '/sobre': {
        title: 'SOBRE',
        subtitle: 'O ESTÚDIO ORBI 3D'
      }
    }

    const routeInfo = routeData[router.pathname]
    if (routeInfo) {
      setTitleMenu(routeInfo.title)
      setSubtitleMenu(routeInfo.subtitle)
    } else {
      setTitleMenu('BE AN ASTRONAUT')
      setSubtitleMenu('Nós capacitamos projetos.')
    }
  }, [router.pathname])

  useEffect(() => {
    if (router.pathname === '/') {
      const handleScroll = () => {
        const sectionIds = [
          'introSection',
          'aboutSection',
          'servicesSection',
          'contactSection'
        ]

        let sectionTitle = ''

        for (const sectionId of sectionIds) {
          const section = document.getElementById(sectionId)
          if (section) {
            const rect = section.getBoundingClientRect()
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
              sectionTitle = getTitleForSection(sectionId)
              break
            }
          }
        }

        setTitleMenu(sectionTitle)

        if (sectionTitle !== 'BE AN ASTRONAUT') {
          setSubtitleMenu('')
          setMenuGroup(false)
        } else {
          setMenuGroup(true)
          setSubtitleMenu('Nós capacitamos projetos.')
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [router.pathname])

  const getTitleForSection = (sectionId: string) => {
    switch (sectionId) {
      case 'introSection':
        return 'BE AN ASTRONAUT'
      case 'aboutSection':
        return 'SOBRE'
      case 'servicesSection':
        return 'SERVIÇOS'
      case 'contactSection':
        return ''
      default:
        return ''
    }
  }

  const isHome = router.pathname === '/'

  return (
    <S.Wrapper>
      <S.Fixed isHome={isHome}>
        <MediaMatch greaterThan="medium">
          <Link href="/">
            <S.LogoWrappertwo>
              <Image
                src={'/img/logoorbi.png'}
                alt="logomarca orbi"
                width={500}
                height={500}
              />
            </S.LogoWrappertwo>
          </Link>
        </MediaMatch>

        <S.Info>
          <S.TitleMenu>{titleMenu}</S.TitleMenu>
          <S.SubtitleMenu>{subtitleMenu}</S.SubtitleMenu>
        </S.Info>

        <MediaMatch lessThan="medium">
          <S.LogoWrapper>
            <Logo color="white" size="normal" hideOnMobile />
          </S.LogoWrapper>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <S.IconWrapper onClick={() => setIsOpen(true)}>
            <MenuIcon aria-label="Open Menu" />
          </S.IconWrapper>
        </MediaMatch>

        <S.MenuGroup>
          <MediaMatch greaterThan="medium">
            {menuGroup && (
              <>
                <Link href="/" passHref>
                  <S.StyledMenuLink active={router.pathname === '/'}>
                    Home
                  </S.StyledMenuLink>
                </Link>
                <Link href="/sobre" passHref>
                  <S.StyledMenuLink active={router.pathname === '/sobre'}>
                    Sobre
                  </S.StyledMenuLink>
                </Link>
                <Link href="/servicos" passHref>
                  <S.StyledMenuLink active={router.pathname === '/servicos'}>
                    Serviços
                  </S.StyledMenuLink>
                </Link>
                <Link href="/galeria" passHref>
                  <S.StyledMenuLink active={router.pathname === '/galeria'}>
                    Galeria
                  </S.StyledMenuLink>
                </Link>
                <Link href="/contato" passHref>
                  <S.StyledMenuLink active={router.pathname === '/contato'}>
                    Contato
                  </S.StyledMenuLink>
                </Link>
              </>
            )}
          </MediaMatch>
        </S.MenuGroup>

        <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
          <CloseIcon
            aria-label="Close Menu"
            className="bnt-close"
            onClick={() => setIsOpen(false)}
          />
          <S.MenuNav>
            <Link href="/" passHref>
              <S.MenuLink>Home</S.MenuLink>
            </Link>
            <Link href="/sobre" passHref>
              <S.MenuLink>Sobre</S.MenuLink>
            </Link>
            <Link href="/servicos" passHref>
              <S.MenuLink>Serviços</S.MenuLink>
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
      </S.Fixed>
    </S.Wrapper>
  )
}

export default Menu
