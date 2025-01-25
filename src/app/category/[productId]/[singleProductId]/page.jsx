import React from 'react'
import SingleProduct from './SingleProduct';

export default async function page({ params }) {
    const { singleProductId } = await params;
    return (
        <SingleProduct productId={singleProductId} />
    )
}
