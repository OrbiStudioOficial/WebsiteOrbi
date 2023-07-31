/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProductBySlug
// ====================================================

export interface QueryProductBySlug_products_cover_image {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface QueryProductBySlug_products_images {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface QueryProductBySlug_products {
  __typename: "Product";
  id: string;
  title: string | null;
  description: string | null;
  details: string | null;
  slug: string | null;
  cover_image: QueryProductBySlug_products_cover_image | null;
  images: QueryProductBySlug_products_images[];
}

export interface QueryProductBySlug {
  products: QueryProductBySlug_products[];
}

export interface QueryProductBySlugVariables {
  slug: string;
}
