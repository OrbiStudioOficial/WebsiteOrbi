import * as S from './styles'

import Image from 'next/image'
import Link from 'next/link'

const Gallery = () => {
  return (
    <S.Container className="slide-in">
      <S.GalleryContainer>
        <S.GalleryItem>
          <S.Front>
            <Image
              src={'/img/cafealoha.jpg'}
              alt="imagem 01"
              width={650}
              height={600}
              objectFit="cover"
            />
          </S.Front>
          <S.Info>
            <S.Wrapper>
              <S.Title>CAFÉ ALOHA</S.Title>
              <S.Description>
                Projeto desenvolvido para a empresa CAFÉ ALOHA, no havaí.
                Desenvolvimento 3D na criação de interiores da cafeteria.
              </S.Description>
              <Link href="https://www.behance.net/gallery/174536191/-Caf-Aloha-Havai-EUA">
                <a target="_blank" rel="noopener noreferrer">
                  <S.Button>VER PROJETO</S.Button>
                </a>
              </Link>
            </S.Wrapper>
          </S.Info>
        </S.GalleryItem>

        <S.GalleryItem>
          <S.Front>
            <Image
              src={'/img/casasouza.jpg'}
              alt="imagem 01"
              width={650}
              height={600}
              objectFit="cover"
            />
          </S.Front>
          <S.Info>
            <S.Wrapper>
              <S.Title>CASA SOUZA</S.Title>
              <S.Description>
                Projeto de interiores desenvolvido para a CASA SOUZA.
              </S.Description>
              <Link href="https://www.behance.net/gallery/173431621/-Casa-Souza-Sinop-MT">
                <a target="_blank" rel="noopener noreferrer">
                  <S.Button>VER PROJETO</S.Button>
                </a>
              </Link>
            </S.Wrapper>
          </S.Info>
        </S.GalleryItem>

        <S.GalleryItem>
          <S.Front>
            <Image
              src={'/img/coatingline.jpg'}
              alt="imagem 01"
              width={650}
              height={600}
              objectFit="cover"
            />
          </S.Front>
          <S.Info>
            <S.Wrapper>
              <S.Title>COATING LINE</S.Title>
              <S.Description>
                Projeto de interiores, resultando em ambientes sofisticados e
                funcionais.
              </S.Description>
              <Link href="https://www.behance.net/gallery/163393923/-Render-produced-for-coating-line">
                <a target="_blank" rel="noopener noreferrer">
                  <S.Button>VER PROJETO</S.Button>
                </a>
              </Link>
            </S.Wrapper>
          </S.Info>
        </S.GalleryItem>

        <S.GalleryItem>
          <S.Front>
            <Image
              src={'/img/fundointro.jpg'}
              alt="imagem 01"
              width={650}
              height={600}
              objectFit="cover"
            />
          </S.Front>
          <S.Info>
            <S.Wrapper>
              <S.Title>WDG ENGENHARIA</S.Title>
              <S.Description>
                Projeto de interiores desenvolvido para a WDG Engenharia,
                resultando em ambientes sofisticados e funcionais. Com atenção
                aos detalhes e uma abordagem personalizada, criamos espaços que
                refletem a identidade e as necessidades dos clientes.
              </S.Description>
              <Link href="https://www.behance.net/gallery/164333869/-Imagem-baseada-em-um-material-da-Hufton-Crow">
                <a target="_blank" rel="noopener noreferrer">
                  <S.Button>VER PROJETO</S.Button>
                </a>
              </Link>
            </S.Wrapper>
          </S.Info>
        </S.GalleryItem>

        <S.GalleryItem>
          <S.Front>
            <Image
              src={'/img/Condominiodelofts.jpg'}
              alt="imagem 01"
              width={650}
              height={600}
              objectFit="cover"
            />
          </S.Front>
          <S.Info>
            <S.Wrapper>
              <S.Title>CONDOMINIO DE LOFTS</S.Title>
              <S.Description>
                Projeto de interiores desenvolvido para a WDG Engenharia,
                resultando em ambientes sofisticados e funcionais. Com atenção
                aos detalhes e uma abordagem personalizada, criamos espaços que
                refletem a identidade e as necessidades dos clientes.
              </S.Description>
              <Link href="https://www.behance.net/gallery/178279183/-Condominio-de-lofts-Uniao-da-Vitoria-PR">
                <a target="_blank" rel="noopener noreferrer">
                  <S.Button>VER PROJETO</S.Button>
                </a>
              </Link>
            </S.Wrapper>
          </S.Info>
        </S.GalleryItem>

        <S.GalleryItem>
          <S.Front>
            <Image
              src={'/img/aware.jpg'}
              alt="imagem 01"
              width={650}
              height={600}
              objectFit="cover"
            />
          </S.Front>
          <S.Info>
            <S.Wrapper>
              <S.Title>AWARE SOLUÇÕES</S.Title>
              <S.Description>
                Projeto de interiores desenvolvido para a empresa Aware
                Soluções.
              </S.Description>
              <Link href="https://www.behance.net/gallery/159760431/-AWARE-SOLUCOES_Porto-Uniao-SC">
                <a target="_blank" rel="noopener noreferrer">
                  <S.Button>VER PROJETO</S.Button>
                </a>
              </Link>
            </S.Wrapper>
          </S.Info>
        </S.GalleryItem>

        <S.GalleryItem>
          <S.Front>
            <Image
              src={'/img/bavna.jpg'}
              alt="imagem 01"
              width={650}
              height={600}
              objectFit="cover"
            />
          </S.Front>
          <S.Info>
            <S.Wrapper>
              <S.Title>CLÍNICA BAVNA</S.Title>
              <S.Description>
                Projeto de interiores, resultando em ambientes sofisticados e
                funcionais. Com atenção aos detalhes e uma abordagem
                personalizada, criamos espaços que refletem a identidade e as
                necessidades dos clientes.
              </S.Description>
              <Link href="https://www.behance.net/gallery/159887643/-CLINICA-BAVNA_ItajaiSC">
                <a target="_blank" rel="noopener noreferrer">
                  <S.Button>VER PROJETO</S.Button>
                </a>
              </Link>
            </S.Wrapper>
          </S.Info>
        </S.GalleryItem>

        <S.GalleryItem>
          <S.Front>
            <Image
              src={'/img/casaRN.jpg'}
              alt="imagem 01"
              width={650}
              height={600}
              objectFit="cover"
            />
          </S.Front>
          <S.Info>
            <S.Wrapper>
              <S.Title>CASA RS</S.Title>
              <S.Description>Projeto de interiores.</S.Description>
              <Link href="https://www.behance.net/gallery/173432911/-Casa-RS-Uniao-da-Vitoria-PR">
                <a target="_blank" rel="noopener noreferrer">
                  <S.Button>VER PROJETO</S.Button>
                </a>
              </Link>
            </S.Wrapper>
          </S.Info>
        </S.GalleryItem>
      </S.GalleryContainer>
    </S.Container>
  )
}

export default Gallery
