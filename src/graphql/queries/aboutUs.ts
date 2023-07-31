import { gql } from '@apollo/client'

export const QUERY_ABOUT = gql`
  query QueryAboutUs {
    aboutUs {
      WhoIsUs {
        id
        title
        description
        phrase1
        phrase2
        phrase3
        images {
          url
        }
      }
      OurLocations {
        id
        title
        description
        category {
          id
          title
          items {
            id
            image {
              url
            }
            title
            description
            buttonTitle
            buttonLink
          }
        }
      }
      WhyUs {
        id
        title
        description
        WhyUsItems {
          id
          number
          description
        }
      }
    }
  }
`
