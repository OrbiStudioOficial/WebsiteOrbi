import { gql } from '@apollo/client'

export const QUERY_CATEGORIES = gql`
  query QueryCategories($limit: Int) {
    productCategories(limit: $limit) {
      id
      title
      description
      buttonTitle
      buttonLink
      products {
        id
        title
        description
        slug
        details
        cover_image {
          url
          alternativeText
        }
        detailsButton
        singularExtLink
        images {
          url
          alternativeText
        }
      }
    }
  }
`
