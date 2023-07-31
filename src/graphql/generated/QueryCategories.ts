/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryCategories
// ====================================================

export interface QueryCategories_productCategories_products_cover_image {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface QueryCategories_productCategories_products_images {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface QueryCategories_productCategories_products {
  __typename: "Product";
  id: string;
  title: string | null;
  description: string | null;
  slug: string | null;
  details: string | null;
  cover_image: QueryCategories_productCategories_products_cover_image | null;
  detailsButton: string | null;
  singularExtLink: string | null;
  images: QueryCategories_productCategories_products_images[];
}

export interface QueryCategories_productCategories {
  __typename: "ProductCategory";
  id: string;
  title: string | null;
  description: string | null;
  buttonTitle: string | null;
  buttonLink: string | null;
  products: QueryCategories_productCategories_products[];
}

export interface QueryCategories {
  productCategories: QueryCategories_productCategories[];
}

export interface QueryCategoriesVariables {
  limit?: number | null;
}
