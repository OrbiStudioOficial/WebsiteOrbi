/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryAnnouncements
// ====================================================

export interface QueryAnnouncements_announcements_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryAnnouncements_announcements {
  __typename: "Announcement";
  id: string;
  title: string | null;
  description: string | null;
  slug: string | null;
  image: QueryAnnouncements_announcements_image | null;
  buttonTitle: string | null;
  singularExtLink: string | null;
}

export interface QueryAnnouncements {
  announcements: QueryAnnouncements_announcements[];
}

export interface QueryAnnouncementsVariables {
  limit?: number | null;
}
