/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryHome
// ====================================================

export interface QueryHome_home_Services_items {
  __typename: "ComponentGeralSimplePresentationItems";
  id: string;
  category: string | null;
  description: string | null;
  buttonTitle: string | null;
  buttonLink: string | null;
}

export interface QueryHome_home_Services {
  __typename: "ComponentGeralSimplePresentation";
  id: string;
  title: string | null;
  description: string | null;
  extTitle: string | null;
  extLink: string | null;
  items: (QueryHome_home_Services_items | null)[] | null;
}

export interface QueryHome_home_products_cover_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_home_products_product_category_cover_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_home_products_product_category {
  __typename: "ProductCategory";
  id: string;
  title: string | null;
  description: string | null;
  buttonTitle: string | null;
  buttonLink: string | null;
  cover_image: QueryHome_home_products_product_category_cover_image | null;
}

export interface QueryHome_home_products {
  __typename: "Product";
  id: string;
  title: string | null;
  description: string | null;
  slug: string | null;
  details: string | null;
  cover_image: QueryHome_home_products_cover_image | null;
  detailsButton: string | null;
  product_category: QueryHome_home_products_product_category | null;
}

export interface QueryHome_home_announcements_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_home_announcements {
  __typename: "Announcement";
  id: string;
  title: string | null;
  description: string | null;
  image: QueryHome_home_announcements_image | null;
  slug: string | null;
  buttonTitle: string | null;
}

export interface QueryHome_home_GetInTouch {
  __typename: "ComponentGeralGetInTouch";
  title: string | null;
  description: string | null;
}

export interface QueryHome_home {
  __typename: "Home";
  Services: QueryHome_home_Services | null;
  products: QueryHome_home_products[];
  announcements: QueryHome_home_announcements[];
  GetInTouch: QueryHome_home_GetInTouch | null;
}

export interface QueryHome {
  home: QueryHome_home | null;
}
