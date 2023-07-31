import * as S from './styles'
import Base from 'templates/Base'
import WhoIsUs, { ImageProps } from 'components/About/WhoIsUs'
import WhyUs, { WhyUsItemProps } from 'components/About/WhyUs'
import { NextSeo } from 'next-seo'

import PresentationCard, {
  PresentationCardInfoProps
} from 'components/PresentationCard'

export type AboutUsTemplateProps = {
  whoIsUsTitle: string
  whoIsUsDescription: string
  images: ImageProps[]
  phrase1: string
  phrase2: string
  phrase3: string
  LocationsItems: PresentationCardInfoProps[]
  LocationsTitle: string
  LocationsDescription: string
  LocationsId: string
  whyUsTitle: string
  whyUsDescription: string
  whyUsItems: WhyUsItemProps[]
}

const AboutUs = ({
  whoIsUsTitle = '01. QUEM SOMOS NÓS',
  whoIsUsDescription = 'Conheça um pouco mais sobre a nossa empresa.',
  images,
  phrase1 = 'A Casa de Placas é uma empresa que realiza serviços especializados em estampagem, distribuição e comercialização de placas automotivas, sendo credenciada pelo DETRAN/PR.',
  phrase2 = 'Desde 2010 com sua matriz localizada em São José dos pinhais, atendemos toda a região metropolitana de Curitiba, entre outras localidades do estado do Paraná e Santa Catarina.',
  phrase3 = 'Contando com lojas em diversas cidades.',
  LocationsItems,
  LocationsTitle = '02. NOSSAS LOCALIDADES',
  LocationsDescription = 'Veja qual dos nossos estabelecimentos está mais próximo de você:',
  LocationsId = '1',
  whyUsItems,
  whyUsTitle = '03. POR QUE ESCOLHER A CASA DE PLACAS?',
  whyUsDescription = 'Entenda alguns motivos que mostrar o porque somos a melhor opção para te ajudar com placas de automóveis.'
}: AboutUsTemplateProps) => {
  return (
    <Base>
      <NextSeo
        title="Casa de Placas | Sobre"
        description="A Casa de Placas é uma empresa que realiza serviços especializados em estampagem, distribuição e comercialização de placas automotivas, sendo credenciada pelo DETRAN/PR."
        canonical="https://casadeplacas.com.br/sobre"
        openGraph={{
          url: 'https://casadeplacas.com.br/sobre',
          title: 'Casa de Placas | Sobre',
          description:
            'A Casa de Placas é uma empresa que realiza serviços especializados em estampagem, distribuição e comercialização de placas automotivas, sendo credenciada pelo DETRAN/PR.',
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
        <S.Background src="/img/background.png" />
        <S.Content>
          <S.Intro>
            <S.Heading>Sobre nós</S.Heading>
            <S.Divider />
            <S.ItemWrapper>
              <S.ItemHeader href="#1">Quem somos nós</S.ItemHeader>
              <S.ItemHeader href="#2">Nossas localidades</S.ItemHeader>
              <S.ItemHeader href="#3">
                Por que escolher a Casa de Placas?
              </S.ItemHeader>
            </S.ItemWrapper>
          </S.Intro>
        </S.Content>
      </S.SectionIntro>
      <S.SectionWhoIsUs id="1">
        <WhoIsUs
          images={images}
          title={whoIsUsTitle}
          description={whoIsUsDescription}
          phrase1={phrase1}
          phrase2={phrase2}
          phrase3={phrase3}
        />
      </S.SectionWhoIsUs>
      <S.OurLocations id="2">
        <PresentationCard
          title={LocationsTitle}
          description={LocationsDescription}
          items={LocationsItems}
          id={LocationsId}
        />
      </S.OurLocations>
      <S.SectionWhyUs id="3">
        <WhyUs
          title={whyUsTitle}
          description={whyUsDescription}
          items={whyUsItems}
        />
      </S.SectionWhyUs>
    </Base>
  )
}

export default AboutUs
