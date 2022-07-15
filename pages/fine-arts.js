import React from "react"
import ProductList from '../components/Product/ProductList';
import ProductPagination from '../components/Product/ProductPagination';
import Head from 'next/head'

function FineArts({ products, totalPages }) {
	return (
		<div>
            <Head>
                <title>Eton Auctions - Fine Arts</title>
            </Head>
            <div className='customContainer'>
                <ProductList products={products} />
                <ProductPagination totalPages={totalPages} />
                <style jsx>{`
                    .customContainer {
                        padding-top: 0px;
                    }
                `}</style>
            </div>
		</div>
	);
}


export default FineArts;
