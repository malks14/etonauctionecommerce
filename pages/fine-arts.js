import React, { Fragment } from 'react';
import axios from 'axios';
import ProductList from '../components/Product/ProductList';
import ProductPagination from '../components/Product/ProductPagination';
import baseUrl from '../utils/baseUrl';
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

FineArts.getInitialProps = async ctx => {
	const page = ctx.query.page ? ctx.query.page : '1';
	const size = 9;
	const url = `${baseUrl}/api/products`;
	const payload = { params: { page, size } };
	const response = await axios.get(url, payload);
	return response.data;
}

export default FineArts;
