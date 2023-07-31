import * as S from './styles'
import { useState } from 'react'
import { Container } from 'components/Container'
import Link from 'next/link'
import Button from 'components/Button'

export type PresentationInfoProps = {
  id: string
  category: string
  title: string
  description: string
  img: string
  slug: string
  buttonTitle: string
  buttonLink: string
}

export type PresentationProps = {
  items: PresentationInfoProps[]
  description: string
  title: string
  extLink: string
  extTitle: string
}

const Presentation = ({
  items,
  description,
  title,
  extTitle,
  extLink
}: PresentationProps) => {
  const [selectedButton, setSelectedButton] = useState(items[0].id)
  const [selectedCategory, setSelectedCategory] = useState(items[0].category)
  const [selectedbuttonTitle, setSelectedbuttonTitle] = useState(
    items[0].buttonTitle
  )
  const [selectedbuttonLink, setSelectedbuttonLink] = useState(
    items[0].buttonLink
  )
  const [selectedInfo, setSelectedInfo] = useState(items[0].description)
  const [selectedImage, setSelectedImage] = useState(items[0].img)
  const isOpen = false
  return (
    <Container>
      <S.Wrapper>
        <S.TitleWrapper>
          {!!title && <S.Title>{title}</S.Title>}
          {!!extTitle && <S.ExtLink href={extLink}>{extTitle}</S.ExtLink>}
        </S.TitleWrapper>
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
                setSelectedInfo(item.description)
                setSelectedCategory(item.category)
                setSelectedImage(item.img)
                setSelectedbuttonTitle(item.buttonTitle)
                setSelectedbuttonLink(item.buttonLink)
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
        <S.Content>
          <S.Column>
            <S.ContentTitle>{selectedCategory}</S.ContentTitle>
            <S.Description>{selectedInfo}</S.Description>
            <Link href={`${selectedbuttonLink}`}>
              <Button size="small">{selectedbuttonTitle}</Button>
            </Link>
            <Link href="/contato">
              <Button size="small" whiteButton>
                Entrar em contato
              </Button>
            </Link>
          </S.Column>
          <S.Column>
            <S.Image src={selectedImage} />
          </S.Column>
        </S.Content>
      </S.Wrapper>
    </Container>
  )
}

export default Presentation
