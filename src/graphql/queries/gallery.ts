import { gql } from '@apollo/client'

export const QUERY_GALLERY = gql`
  query QueryGallery {
    gallery {
      images {
        url
        alternativeText
      }
    }
  }
`
