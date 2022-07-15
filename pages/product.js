import { Fragment } from 'react';
import axios from 'axios';
import baseUrl from '../utils/baseUrl'
import ProductSummary from '../components/Product/ProductSummary';
import ProductAttributes from '../components/Product/ProductAttributes';

function Product({ product, user }) {
	// Spreading the product object as props using the object spread operator
	return (
		<Fragment>
			<ProductSummary user={user} {...product} />
			<ProductAttributes user={user} {...product} />
		</Fragment>
	);
}

Product.getInitialProps = async ({ query: { _id } }) => {
	const url = `${baseUrl}/api/product`;
	const payload = { params: { _id } };
	const response = await axios.get(url, payload);
	return { product: response.data };
};

export default Product;
