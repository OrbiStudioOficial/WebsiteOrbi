import Link from 'next/link'

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import { motion } from 'framer-motion'

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
              <S.SVG>
                <motion.svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="200.000000pt"
                  height="120.000000pt"
                  viewBox="0 0 640.000000 360.000000"
                  preserveAspectRatio="xMidYMid meet"
                  whileHover={{ scale: 1.2 }}
                >
                  <g
                    transform="translate(0.000000,360.000000) scale(0.100000,-0.100000)"
                    fill="#E6503D"
                    stroke="none"
                  >
                    <motion.path
                      fill="#E6503D"
                      d="M1440 2274 c-109 -21 -250 -75 -250 -96 0 -4 -6 -8 -13 -8 -16 0 -54
                    -41 -89 -96 -81 -126 -88 -366 -16 -512 50 -101 147 -170 293 -209 100 -26
                    403 -26 490 0 192 58 294 163 326 333 6 33 9 104 6 159 -12 228 -109 349 -332
                    411 -59 16 -355 29 -415 18z m361 -213 c102 -38 148 -107 156 -231 7 -93 -12
                    -161 -63 -221 -19 -22 -34 -38 -34 -35 0 4 -10 0 -23 -8 -64 -43 -258 -58
                    -375 -31 -147 35 -207 116 -206 280 1 151 61 227 206 260 91 21 265 13 339
                    -14z"
                    />
                    <motion.path
                      fill="#E6503D"
                      d="M2523 2260 c-93 -19 -177 -81 -218 -161 -85 -165 -29 -385 118 -460
                    20 -11 37 -23 37 -28 0 -5 -33 -63 -73 -128 -40 -65 -77 -124 -81 -130 -6 -10
                    23 -13 131 -13 l138 1 74 124 75 125 198 0 198 0 0 -125 0 -125 115 0 115 0 0
                    465 0 465 -392 -1 c-216 -1 -412 -5 -435 -9z m592 -330 l0 -145 -250 0 c-185
                    0 -260 4 -288 14 -52 18 -77 60 -77 131 0 89 28 121 125 143 11 3 126 4 255 3
                    l235 -1 0 -145z"
                    />
                    <motion.path
                      fill="#E6503D"
                      d="M3470 1822 c0 -247 2 -457 6 -466 6 -14 49 -16 455 -16 278 0 467 4
                    498 11 76 16 136 59 167 121 23 44 27 66 28 133 0 94 -22 147 -86 206 l-39 37
                    33 52 c30 49 33 60 33 134 0 106 -30 162 -108 204 l-52 27 -467 3 -467 3 -1
                    -449z m830 268 c44 -24 50 -129 9 -166 -19 -18 -43 -19 -310 -22 l-289 -3 0
                    101 0 100 286 0 c169 0 293 -4 304 -10z m67 -389 c40 -37 38 -117 -4 -163 -15
                    -16 -44 -18 -335 -18 l-318 0 0 100 0 100 318 0 c300 0 319 -1 339 -19z"
                    />
                    <motion.path
                      fill="#E6503D"
                      d="M4755 2258 c-3 -7 -4 -215 -3 -463 l3 -450 113 -3 112 -3 0 466 0
                    465 -110 0 c-79 0 -112 -4 -115 -12z"
                    />
                    <motion.path
                      className="last-path"
                      fill="#2C1B63"
                      d="M5164 1591 c-52 -32 -74 -68 -74 -123 0 -118 99 -186 204 -140 57 26
                    86 70 86 132 0 113 -123 188 -216 131z"
                    />
                  </g>
                </motion.svg>
              </S.SVG>
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
