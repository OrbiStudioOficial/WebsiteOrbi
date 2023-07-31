import HomeTemplate, { HomeTemplateProps } from 'templates/Home'
import homeServicesMock from 'mocks/home/services'
import homeProductsMock from 'mocks/home/products'
import homeAnnouncementsMock from 'mocks/home/announcements'

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      services: homeServicesMock,
      products: homeProductsMock,
      announcements: homeAnnouncementsMock
    }
  }
}
