/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryAnnouncementsBySlug
// ====================================================

export interface QueryAnnouncementsBySlug_announcements_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryAnnouncementsBySlug_announcements_announcement_categories {
  __typename: "AnnouncementCategory";
  id: string;
  title: string | null;
}

export interface QueryAnnouncementsBySlug_announcements {
  __typename: "Announcement";
  id: string;
  title: string | null;
  description: string | null;
  slug: string | null;
  content: string | null;
  date: any | null;
  image: QueryAnnouncementsBySlug_announcements_image | null;
  announcement_categories: QueryAnnouncementsBySlug_announcements_announcement_categories[];
}

export interface QueryAnnouncementsBySlug {
  announcements: QueryAnnouncementsBySlug_announcements[];
}

export interface QueryAnnouncementsBySlugVariables {
  slug: string;
}
