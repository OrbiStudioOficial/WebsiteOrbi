import React from 'react'
import * as S from './styles'
import Base from 'templates/Base'
import Gallery from 'components/Gallery'

const GalleryTemplate = () => {
  return (
    <Base>
      <S.SectionIntro>
        <Gallery />
      </S.SectionIntro>
    </Base>
  )
}

export default GalleryTemplate
