/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProducts
// ====================================================

export interface QueryProducts_products_product_category_products_cover_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryProducts_products_product_category_products {
  __typename: "Product";
  id: string;
  title: string | null;
  description: string | null;
  slug: string | null;
  cover_image: QueryProducts_products_product_category_products_cover_image | null;
  detailsButton: string | null;
  singularExtLink: string | null;
}

export interface QueryProducts_products_product_category {
  __typename: "ProductCategory";
  id: string;
  title: string | null;
  products: QueryProducts_products_product_category_products[];
}

export interface QueryProducts_products {
  __typename: "Product";
  product_category: QueryProducts_products_product_category | null;
}

export interface QueryProducts {
  products: QueryProducts_products[];
}

export interface QueryProductsVariables {
  limit?: number | null;
}
