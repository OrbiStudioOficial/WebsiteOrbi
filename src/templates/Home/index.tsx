import React from 'react'
import Base from 'templates/Base'
import Intro from 'components/Home/Intro'
import About from 'components/Home/About'
import * as S from './styles'

import Presentation, { PresentationInfoProps } from 'components/Presentation'
import SimplePresentation, {
  SimplePresentationInfoProps
} from 'components/SimplePresentation'
import SimplePresentationCard, {
  SimplePresentationCardInfoProps
} from 'components/SimplePresentationCard'
import GetInTouch from 'components/GetInTouch'
import { NextSeo } from 'next-seo'

export type HomeTemplateProps = {
  services: SimplePresentationInfoProps[]
  servicesTitle: string
  servicesDescription: string
  servicesExtTitle: string
  servicesExtLink: string
  products: PresentationInfoProps[]
  productsTitle: string
  productsDescription: string
  productsExtTitle: string
  productsextLink: string
  singularExtLink: string
  announcements: SimplePresentationCardInfoProps[]
  announcementsTitle: string
  announcementsDescription: string
  announcementsExtTitle: string
  announcementsExtLink: string
  getInTouchTitle: string
  getInTouchDescription: string
}

const Home = ({
  services,
  servicesTitle = '02. SERVIÇOS',
  servicesDescription = 'Veja quais serviços a nossa empresa presta:',
  servicesExtTitle = '',
  servicesExtLink = '',
  products,
  productsTitle = '03. PRODUTOS',
  productsDescription = 'Produtos personalizados de acordo com a sua necessidade.',
  productsExtTitle = 'VER TODOS OS PRODUTOS',
  productsextLink = '/produtos',
  announcements,
  announcementsTitle = '04. COMUNICADOS',
  announcementsDescription = 'Fique por dentro das novidades da nossa empresa.',
  announcementsExtTitle = 'VER COMUNICADOS',
  announcementsExtLink = '/comunicados',
  getInTouchTitle = '04. ENTRE EM CONTATO',
  getInTouchDescription = 'Converse com um de nossos atendentes para tirar as suas dúvidas.'
}: HomeTemplateProps) => {
  return (
    <Base>
      <NextSeo
        title="Casa de Placas"
        description="A Casa de Placas é uma empresa que realiza serviços especializados
        em estampagem, distribuição e comercialização de placas
        automotivas, sendo credenciada pelo DETRAN/PR e DETRAN/SC."
        canonical="https://casadeplacas.com.br"
        openGraph={{
          url: 'https://casadeplacas.com.br',
          title: 'Casa de Placas',
          description:
            'A Casa de Placas é uma empresa que realiza serviços especializados em estampagem, distribuição e comercialização de placas automotivas, sendo credenciada pelo DETRAN/PR e DETRAN/SC.',
          images: [
            {
              url: 'https://casadeplacas.com/img/logoplacas.jpg',
              width: 1280,
              height: 720,
              alt: 'Casa de Placas'
            }
          ],
          site_name: 'Casa de Placas'
        }}
      />
      <Intro />
      <About />
      <S.Services>
        <SimplePresentation
          items={services}
          presentationTitle={servicesTitle}
          description={servicesDescription}
          extTitle={servicesExtTitle}
          extLink={servicesExtLink}
        />
      </S.Services>
      <S.Products>
        <Presentation
          items={products}
          title={productsTitle}
          description={productsDescription}
          extTitle={productsExtTitle}
          extLink={productsextLink}
        />
      </S.Products>
      {announcements.length < 1 ? (
        <S.Announcements>
          <SimplePresentationCard
            items={announcements}
            title={announcementsTitle}
            description={announcementsDescription}
            extTitle={announcementsExtTitle}
            extLink={announcementsExtLink}
          />
        </S.Announcements>
      ) : (
        <></>
      )}

      <S.SectionGetInTouch>
        <GetInTouch
          title={getInTouchTitle}
          description={getInTouchDescription}
        />
      </S.SectionGetInTouch>
    </Base>
  )
}

export default Home
