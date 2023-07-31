import { gql } from '@apollo/client'

export const QUERY_PRODUCTS = gql`
  query QueryProducts($limit: Int) {
    products(limit: $limit) {
      product_category {
        id
        title
        products {
          id
          title
          description
          slug
          cover_image {
            url
          }
          detailsButton
          singularExtLink
        }
      }
    }
  }
`

export const QUERY_PRODUCTS_BY_SLUG = gql`
  query QueryProductBySlug($slug: String!) {
    products(where: { slug: $slug }) {
      id
      title
      description
      details
      slug
      cover_image {
        url
        alternativeText
      }
      images {
        url
        alternativeText
      }
    }
  }
`

export const QUERY_ALL_PRODUCTS = gql`
  query QueryAllProducts {
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
      }
      images {
        url
      }
    }
  }
`
