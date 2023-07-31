import { useState, useRef } from 'react'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import SlickSlider from 'react-slick'

import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'progressive',
  arrows: false,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 8,
  speed: 500,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 8,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 6,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 4,
        draggable: true
      }
    }
  ]
}

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null)
  const [selectedImg, setSelectedImg] = useState(items[0].src)
  return (
    <S.Wrapper>
      <S.SelectedImage>
        <img src={selectedImg} alt="selected" />
      </S.SelectedImage>
      <S.NonSelectedImage>
        <Slider ref={slider} settings={settings}>
          {items.map((item, index) => (
            <img
              role="button"
              key={`thumb-${index}`}
              src={item.src}
              alt={`Thumb - ${item.label}`}
              onClick={() => {
                slider.current!.slickGoTo(index, true)
                setSelectedImg(item.src)
              }}
            />
          ))}
        </Slider>
      </S.NonSelectedImage>
    </S.Wrapper>
  )
}

export default Gallery
