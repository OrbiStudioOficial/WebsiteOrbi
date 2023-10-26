import Link from 'next/link'
import * as S from './styles'

import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.8 }}
    >
      <S.Container>
        <S.GridContainer>
          <S.SectionIntro>
            <S.Phrase10 id="introSection">o que é a orbi?</S.Phrase10>
            <S.Phrase2>
              Somos especialistas em transformar sonhos arquitetônicos em
              realidade virtual. Explore ambientes deslumbrantes e conceitos
              inovadores com nossas renderizações 3D de alta qualidade.
              Prepare-se para uma jornada além da imaginação, onde o futuro se
              encontra com a arquitetura.
            </S.Phrase2>
            <Link href={'/galeria'}>
              <S.Button className="cta-02">
                <span>GALERIA</span>
              </S.Button>
            </Link>
          </S.SectionIntro>

          <S.VideoContainer>
            <video
              className="video"
              src="img/videoteste.mp4"
              autoPlay={true}
              loop={true}
              muted={true}
            ></video>
          </S.VideoContainer>
        </S.GridContainer>
      </S.Container>
    </motion.div>
  )
}

export default Intro
