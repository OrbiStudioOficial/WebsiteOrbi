/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryAboutUs
// ====================================================

export interface QueryAboutUs_aboutUs_WhoIsUs_images {
  __typename: "UploadFile";
  url: string;
}

export interface QueryAboutUs_aboutUs_WhoIsUs {
  __typename: "ComponentAboutWhoIsUs";
  id: string;
  title: string | null;
  description: string | null;
  phrase1: string | null;
  phrase2: string | null;
  phrase3: string | null;
  images: QueryAboutUs_aboutUs_WhoIsUs_images[];
}

export interface QueryAboutUs_aboutUs_OurLocations_category_items_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryAboutUs_aboutUs_OurLocations_category_items {
  __typename: "ComponentGeralPresentationCardItems";
  id: string;
  image: QueryAboutUs_aboutUs_OurLocations_category_items_image | null;
  title: string | null;
  description: string | null;
  buttonTitle: string | null;
  buttonLink: string | null;
}

export interface QueryAboutUs_aboutUs_OurLocations_category {
  __typename: "ComponentGeralPresentationCardCategory";
  id: string;
  title: string | null;
  items: (QueryAboutUs_aboutUs_OurLocations_category_items | null)[] | null;
}

export interface QueryAboutUs_aboutUs_OurLocations {
  __typename: "ComponentGeralPresentationCard";
  id: string;
  title: string | null;
  description: string | null;
  category: (QueryAboutUs_aboutUs_OurLocations_category | null)[] | null;
}

export interface QueryAboutUs_aboutUs_WhyUs_WhyUsItems {
  __typename: "ComponentAboutWhyUsItems";
  id: string;
  number: string | null;
  description: string | null;
}

export interface QueryAboutUs_aboutUs_WhyUs {
  __typename: "ComponentAboutWhyUs";
  id: string;
  title: string | null;
  description: string | null;
  WhyUsItems: (QueryAboutUs_aboutUs_WhyUs_WhyUsItems | null)[] | null;
}

export interface QueryAboutUs_aboutUs {
  __typename: "AboutUs";
  WhoIsUs: QueryAboutUs_aboutUs_WhoIsUs | null;
  OurLocations: QueryAboutUs_aboutUs_OurLocations | null;
  WhyUs: QueryAboutUs_aboutUs_WhyUs | null;
}

export interface QueryAboutUs {
  aboutUs: QueryAboutUs_aboutUs | null;
}
