import React from 'react'
import Base from 'templates/Base'
import * as S from './styles'

import SimplePresentationCard, {
  SimplePresentationCardInfoProps
} from 'components/SimplePresentationCard'
import GetInTouch from 'components/GetInTouch'
import MediaMatch from 'components/MediaMatch'
import { NextSeo } from 'next-seo'

export type AnnouncementsTemplateProps = {
  announcements: SimplePresentationCardInfoProps[]
  simplePresentationCardDescription: string
  simplePresentationCardTitle: string
  getInTouchTitle: string
  getInTouchDescription: string
}

const Announcements = ({
  announcements,
  simplePresentationCardDescription = 'Fique por dentro das novidades da nossa empresa.',
  simplePresentationCardTitle = '',
  getInTouchTitle = '02. ENTRE EM CONTATO',
  getInTouchDescription = 'Converse com um de nossos atendentes para tirar as suas dúvidas.'
}: AnnouncementsTemplateProps) => {
  return (
    <Base>
      <NextSeo
        title="Casa de Placas | Comunicados"
        description="Fique por dentro das novidades da nossa empresa."
        canonical="https://casadeplacas.com.br/comunicados"
        openGraph={{
          url: 'https://casadeplacas.com.br/comunicados',
          title: 'Casa de Placas | Comunicados',
          description: 'Fique por dentro das novidades da nossa empresa.',
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
      <MediaMatch lessThan="medium">
        <S.Heading>Comunicados</S.Heading>
      </MediaMatch>
      <MediaMatch greaterThan="medium">
        <S.SectionIntro>
          <S.Content>
            <S.Intro>
              <S.Heading>Comunicados</S.Heading>
            </S.Intro>
          </S.Content>
        </S.SectionIntro>
      </MediaMatch>
      <S.SectionPresentationCard>
        <SimplePresentationCard
          extTitle=""
          extLink=""
          items={announcements}
          title={simplePresentationCardTitle}
          description={simplePresentationCardDescription}
        />
      </S.SectionPresentationCard>
      <S.SectionGetInTouch>
        <GetInTouch
          title={getInTouchTitle}
          description={getInTouchDescription}
        />
      </S.SectionGetInTouch>
    </Base>
  )
}

export default Announcements
