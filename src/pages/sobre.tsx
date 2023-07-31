import AboutUsTemplate, { AboutUsTemplateProps } from 'templates/AboutUs'
import whoIsImagesMock from 'mocks/about/whoisImages'
import ouLocationsMock from 'mocks/about/ourLocations'
import whyUsItemsMock from 'mocks/about/whyUsItems'

export default function Components(props: AboutUsTemplateProps) {
  return <AboutUsTemplate {...props} />
}

export async function getStaticProps() {
  return {
    revalidate: 60,
    props: {
      images: whoIsImagesMock,
      LocationsItems: ouLocationsMock,
      whyUsItems: whyUsItemsMock
    }
  }
}
