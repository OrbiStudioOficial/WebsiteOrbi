import * as S from './styles'
import { useState } from 'react'
import { Container } from 'components/Container'
import Card, { CardProps } from 'components/Card'

export type PresentationCardInfoProps = {
  id: string
  category: string
  presentationItems: CardProps[]
}

export type PresentationCardProps = {
  items: PresentationCardInfoProps[]
  description: string
  title: string
  id: string
}

const PresentationCard = ({
  items,
  description,
  title
}: PresentationCardProps) => {
  const [selectedButton, setSelectedButton] = useState(items[0].id)
  const [selectedItems, setSelectedItems] = useState(items[0].presentationItems)
  const isOpen = false
  return (
    <Container>
      <S.Wrapper>
        {!!title && (
          <S.TitleWrapper>
            <S.Title>{title}</S.Title>
          </S.TitleWrapper>
        )}
        {!!description && (
          <S.TitleWrapper>
            <S.PresentationDescription>{description}</S.PresentationDescription>
          </S.TitleWrapper>
        )}
        <S.CategoriesWrapper>
          {items.map((item, index) => (
            <S.Button
              isOpen={isOpen}
              style={{
                backgroundColor:
                  selectedButton === item.id ? '#002759' : 'white',
                transition: '0.4s'
              }}
              key={`thumb-${index}`}
              onClick={() => {
                setSelectedButton(item.id)
                setSelectedItems(item.presentationItems)
              }}
            >
              <S.Text
                style={{
                  color: selectedButton === item.id ? 'white' : '#002759',
                  transition: '0.4s'
                }}
              >
                {item.category}
              </S.Text>
            </S.Button>
          ))}
        </S.CategoriesWrapper>
        <S.Hr />
        {!!selectedItems && (
          <S.Content>
            {selectedItems.map((item) => (
              <>
                <Card
                  key={item.id}
                  img={item.img}
                  description={item.description}
                  title={item.title}
                  buttonLink={item.buttonLink}
                  buttonTitle={item.buttonTitle}
                  id={item.id}
                  singularExtLink={item.singularExtLink}
                  slug={item.slug}
                />
              </>
            ))}
          </S.Content>
        )}
      </S.Wrapper>
    </Container>
  )
}

export default PresentationCard
