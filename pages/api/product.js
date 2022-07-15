import Product from '../../models/Product';
import Cart from '../../models/Cart';
import connectDB from '../../utils/connectDb';

connectDB();

export default async (req, res) => {
	switch (req.method) {
		case 'GET':
			await handleGetRequest(req, res);
			break;
		case 'POST':
			await handlePostRequest(req, res);
			break;
		case 'DELETE':
			await handleDeleteRequest(req, res);
			break;
		default:
			res.status(405).send(`Method ${req.method} not allowed`);
			break;
	}
};

async function handleGetRequest(req, res) {
	const { _id } = req.query;
	const product = await Product.findOne({ _id });
	res.status(200).json(product);
}

async function handlePostRequest(req, res) {

	const { artist, name, category, price, description, mediaUrl } = req.body;
	try {
		
		if (!artist || !name || !category || !price || !description || !mediaUrl) {
		
			return res.status(422).send('Product missing one or more fields');
		}
		const newProduct = await new Product({
			artist,
			name,
			category,
			price,
			description,
			mediaUrl
		});
		console.log(newProduct, "New Product Created");
		
		newProduct.save();

		console.log("New Product Saved");
		res.status(201).json(newProduct);
	} catch (error) {
		console.error(error, "Error Creating Product");
		res.status(500).send('Server error in creating product');
	}
}

async function handleDeleteRequest(req, res) {
	try {
		const { _id } = req.query;
		
		await Product.findOneAndDelete({ _id });
		
		await Cart.updateMany(
			
			{ 'products.product': _id },
			
			{ $pull: { products: { product: _id } } }
		);
		
		res.status(204).json({});
	} catch (error) {
		console.error(error);
		res.status(500).send('Error deleting product');
	}
}
