import React, { useState, useEffect, useRef } from 'react'
import * as S from './styles'
import Base from 'templates/Base'
import { Container } from 'components/Container'
import GetInTouch from 'components/GetInTouch'
import { Close } from '@styled-icons/material-outlined/Close'
import Image from 'next/image'
import SlickSlider from 'react-slick'

import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import Slider, { SliderSettings } from 'components/Slider'
import { NextSeo } from 'next-seo'

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: false,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}

export type ImageProps = {
  src: string
  label: string
}

export type GalleryTemplateProps = {
  items: ImageProps[]
  getInTouchTitle: string
  getInTouchDescription: string
}

const GalleryTemplate = ({
  items,
  getInTouchTitle = '01. ENTRE EM CONTATO',
  getInTouchDescription = 'Converse com um de nossos atendentes para tirar as suas dúvidas.'
}: GalleryTemplateProps) => {
  const slider = useRef<SlickSlider>(null)

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])
  return (
    <Base>
      <NextSeo
        title="Casa de Placas | Galeria"
        canonical="https://casadeplacas.com.br/galeria"
        openGraph={{
          url: 'https://casadeplacas.com.br/galeria',
          title: 'Casa de Placas | Galeria',
          images: [
            {
              url: 'https://casadeplacas.com.br/img/logoplacas.jpg',
              width: 1280,
              height: 720,
              alt: 'Casa de Placas'
            }
          ],
          site_name: 'Casa de Placas'
        }}
      />
      <S.SectionIntro>
        <S.Content>
          <S.Intro>
            <S.Heading>Galeria</S.Heading>
            <S.Divider />
            <S.ItemWrapper>
              <S.ItemHeader>Galeria de imagens da nossa empresa.</S.ItemHeader>
            </S.ItemWrapper>
          </S.Intro>
        </S.Content>
      </S.SectionIntro>
      <Container>
        <S.SectionGallery>
          <S.GalleryWrapper>
            {items.map((item, index) => (
              <>
                <S.GalleryItem>
                  <S.Image
                    key={`thumb-${index}`}
                    src={item.src}
                    alt={item.label}
                    role="button"
                    onClick={() => {
                      setIsOpen(true)
                      slider.current!.slickGoTo(index, true)
                    }}
                  />
                </S.GalleryItem>
              </>
            ))}
          </S.GalleryWrapper>
        </S.SectionGallery>
        <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
          <S.Close
            role="button"
            aria-label="close modal"
            onClick={() => setIsOpen(false)}
          >
            <Close size={40} />
          </S.Close>

          <S.ModalContent>
            <Slider ref={slider} settings={modalSettings}>
              {items.map((item, index) => (
                <Image
                  width={800}
                  height={600}
                  objectFit="cover"
                  key={`gallery-${index}`}
                  src={item.src}
                  alt={item.label}
                />
              ))}
            </Slider>
          </S.ModalContent>
        </S.Modal>
        <S.SectionGetInTouch>
          <GetInTouch
            title={getInTouchTitle}
            description={getInTouchDescription}
          />
        </S.SectionGetInTouch>
      </Container>
    </Base>
  )
}

export default GalleryTemplate
