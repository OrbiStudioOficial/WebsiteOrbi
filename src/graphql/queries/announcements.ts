import { gql } from '@apollo/client'

export const QUERY_ANNOUNCEMENTS = gql`
  query QueryAnnouncements($limit: Int) {
    announcements(limit: $limit) {
      id
      title
      description
      slug
      image {
        url
      }
      buttonTitle
      singularExtLink
    }
  }
`

export const QUERY_ANNOUNCEMENTS_BY_SLUG = gql`
  query QueryAnnouncementsBySlug($slug: String!) {
    announcements(where: { slug: $slug }) {
      id
      title
      description
      slug
      content
      date
      image {
        url
      }
      announcement_categories {
        id
        title
      }
    }
  }
`
