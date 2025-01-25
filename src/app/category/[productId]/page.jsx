import React from 'react'
import Products from './Products';

export default async function page({params}) {
  const { productId } = await params;
  return (
    <Products productId={productId} />
  )
}
