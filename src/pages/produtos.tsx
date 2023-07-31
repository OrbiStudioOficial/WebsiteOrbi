import ProductsTemplate, { ProductsTemplateProps } from 'templates/Products'
import categoriesMock from 'mocks/products/categories'

export default function Components(props: ProductsTemplateProps) {
  return <ProductsTemplate {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      products: categoriesMock
    }
  }
}
