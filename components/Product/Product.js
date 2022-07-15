// import baseUrl from '../../utils/baseUrl';
import styles from '../../styles/Products.module.css';
import { AnimatePresence, motion } from "framer-motion";

const transition = { duration: 0.5, ease: "easeInOut" };


const productVariants = {
    initial: { opacity: 0 },
    enter: {opacity: 1, transition },
    exit: { opacity: 0, transition }
};

function Product({ artwork, artist, image, price, description, category, year, sku }) {
	

	return (
		<motion.div
        initial="exit"
        animate="enter"
        exit="exit"
        variants={productVariants}>
			<div className={styles.product_wrapper}>
				<img alt="" src={image} />
				<div className={styles.product_info}>
					<h1>{artwork}</h1>
					<h2>{artist} &nbsp;<span>- {year}</span></h2>
					<p>GBP {price}</p>	
				</div>
			</div>
            {/* <p>{description}</p>
            <p>{category}</p>
            <p>{sku}</p> */}
		</motion.div>
	);
}

export default Product;