import GalleryTemplate, { GalleryTemplateProps } from 'templates/Gallery'
import galleryMock from 'mocks/gallery/gallery'

export default function Gallery(props: GalleryTemplateProps) {
  return <GalleryTemplate {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      items: galleryMock
    }
  }
}
