import { gql } from '@apollo/client'

export const QUERY_HOME = gql`
  query QueryHome {
    home {
      Services {
        id
        title
        description
        extTitle
        extLink
        items {
          id
          category
          description
          buttonTitle
          buttonLink
        }
      }
      products {
        id
        title
        description
        slug
        details
        cover_image {
          url
        }
        detailsButton
        product_category {
          id
          title
          description
          buttonTitle
          buttonLink
          cover_image {
            url
          }
        }
      }
      announcements {
        id
        title
        description
        image {
          url
        }
        slug
        buttonTitle
      }
      GetInTouch {
        title
        description
      }
    }
  }
`
