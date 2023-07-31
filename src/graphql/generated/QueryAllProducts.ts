/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryAllProducts
// ====================================================

export interface QueryAllProducts_products_cover_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryAllProducts_products_product_category {
  __typename: "ProductCategory";
  id: string;
  title: string | null;
}

export interface QueryAllProducts_products_images {
  __typename: "UploadFile";
  url: string;
}

export interface QueryAllProducts_products {
  __typename: "Product";
  id: string;
  title: string | null;
  description: string | null;
  slug: string | null;
  details: string | null;
  cover_image: QueryAllProducts_products_cover_image | null;
  detailsButton: string | null;
  product_category: QueryAllProducts_products_product_category | null;
  images: QueryAllProducts_products_images[];
}

export interface QueryAllProducts {
  products: QueryAllProducts_products[];
}
