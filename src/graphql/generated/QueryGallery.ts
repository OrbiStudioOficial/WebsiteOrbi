/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryGallery
// ====================================================

export interface QueryGallery_gallery_images {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface QueryGallery_gallery {
  __typename: "Gallery";
  images: QueryGallery_gallery_images[];
}

export interface QueryGallery {
  gallery: QueryGallery_gallery | null;
}
