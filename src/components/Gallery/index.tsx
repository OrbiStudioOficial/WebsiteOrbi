import * as S from './styles'

import Image from 'next/image'

import { motion } from 'framer-motion'
import Footer from 'components/Footer'
import { useState } from 'react'

const Gallery = () => {
  const imageNames = [
    'img01.jpg',
    'img02.jpg',
    'img04.jpg',
    'img06.jpg',
    'img07.jpg',
    'img09.jpg',
    'img11.jpg',
    'img12.jpg',
    'img14.jpg',
    'img16.jpg',
    'img17.jpg',
    'img18.jpg',
    'img19.jpg',
    'img20.jpg',
    'img21.jpg',
    'img23.jpg',
    'img24.jpg',
    'img25.jpg',
    'img26.jpg',
    'img27.jpg',
    'img28.jpg',
    'img29.jpg',
    'img30.jpg',
    'img31.jpg',
    'img32.jpg',
    'img33.jpg',
    'img34.jpg',
    'img35.jpg',
    'img36.jpg',
    'img37.jpg',
    'img38.jpg',
    'img39.jpg',
    'img40.jpg',
    'img41.jpg',
    'img42.jpg',
    'img43.jpg',
    'img44.jpg',
    'img45.jpg',
    'img46.jpg',
    'img49.jpg',
    'img50.jpg',
    'img51.jpg',
    'img53.jpg',
    'img54.jpg',
    'img55.jpg',
    'img57.jpg',
    'img62.jpg',
    'img65.jpg',
    'img67.jpg',
    'img68.jpg',
    'img69.jpg',
    'img70.jpg',
    'img71.jpg',
    'img73.jpg',
    'img74.jpg',
    'img75.jpg',
    'img76.jpg',
    'img77.jpg',
    'img78.jpg',
    'img79.jpg',
    'img80.jpg',
    'img81.jpg',
    'img82.jpg',
    'img83.jpg',
    'img84.jpg',
    'img85.jpg',
    'img86.jpg',
    'img87.jpg',
    'img88.jpg',
    'img89.jpg',
    'img90.jpg',
    'img91.jpg',
    'img92.jpg',
    'img93.jpg',
    'img94.jpg',
    'img95.jpg',
    'img96.jpg'
  ]

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  }

  const PROJECTSLOADING = 8

  const [visible, setVisible] = useState(PROJECTSLOADING)

  const loadingMoreProjects = () => {
    setVisible((prev) => prev + PROJECTSLOADING)
  }

  return (
    <S.Container className="slide-in">
      <S.GalleryContainer>
        {imageNames.slice(0, visible).map((imageName, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <S.GalleryItem key={index}>
              <S.Front>
                <Image
                  src={`/api/imagem?fileName=${imageName}`}
                  alt={`Imagem ${index + 1}`}
                  width={1080}
                  height={1350}
                  objectFit="cover"
                />
              </S.Front>
            </S.GalleryItem>
          </motion.div>
        ))}
      </S.GalleryContainer>

      <S.Center>
        {visible < imageNames.length && (
          <S.Button onClick={loadingMoreProjects}>Ver mais projetos</S.Button>
        )}
      </S.Center>

      <Footer />
    </S.Container>
  )
}

export default Gallery
