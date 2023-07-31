import { useRouter } from 'next/router'
import ProductTemplate, { ProductTemplateProps } from 'templates/Product'
import { GetStaticPaths, GetStaticProps } from 'next'

import { getImageUrl } from 'utils/getImageUrl'
import categoriesMock from 'mocks/products/categories'

export default function Produto(props: ProductTemplateProps) {
  const router = useRouter()
  if (router.isFallback) return null

  return <ProductTemplate {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = (await import('mocks/product/product')).default
  const slugs = products.map((product) => product.slug)
  const paths = slugs.map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const products = (await import('mocks/product/product')).default
  const prod = products.find((product) => product.slug == params!.slug)

  return {
    props: {
      slug: prod?.slug,
      title: prod?.title,
      cover: prod?.cover_image,
      description: prod?.description,
      details: prod?.details?.map((i) => ({
        id: i?.id,
        item: i?.item
      })),
      gallery: prod?.images.map((image) => ({
        src: `${getImageUrl(image?.url)}`,
        label: image.alternativeText
      })),
      products: categoriesMock
    }
  }
}
