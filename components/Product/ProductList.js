import { Card } from 'semantic-ui-react';
import baseUrl from '../../utils/baseUrl';
import styles from '../../styles/Products.module.css';
import Product from './Product';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import ButtonSecondary from '../_App/ButtonSecondary';

const transition = { duration: 0.5, ease: "easeInOut" };

const productPreviewVariants = {
	initial: { opacity: 0 },
	enter: { opacity: 1, transition },
	exit: { opacity: 0, transition }
};

function ProductList({ products,  }) {
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		console.log(products, "Acá los products");
		if (products) {
			setProductList(products);
			return;
		} else {
			return (<p>No products found.</p>)
		}
	}, [products]);

	return (
		<motion.div className={styles.products_wrapper} variants={productPreviewVariants}>
			<ul className={styles.sidebar}>		
				<div>
					<h3>Filter by:</h3>
					<ButtonSecondary text="Clear Al"/>
				</div>
				
				<li>Region <Arrow/></li>
				<li>Year <Arrow/></li>
				<li>Artist <Arrow/></li>
				<li>Price <Arrow/></li>
				<li>Featured <Arrow/></li>
				<li>On Sale <Arrow/></li>
			</ul>
			<div className={styles.products_list}>
				{productList && productList.map((product, index) => (
					<Product
						key={product.index}
						artist={product.artist}
						artwork={product.name}
						category={product.category}
						price={product.price}
						sku={product.sku}
						image={product.mediaUrl}
						description={product.description}
						year={product.year}
					/>
				))}
			</div>
		</motion.div>
	);
}

export default ProductList;

export const getServerSideProps = async (ctx) => {
	const res = await axios.get(`${baseUrl}/api/product`);
	const products = res.data;
	console.log(products)
	return { props: { products } };
}

const Arrow = () => (
	<img src="/assets/arrow.svg" alt="Eton Auctions" className={styles.arrow}/>
);