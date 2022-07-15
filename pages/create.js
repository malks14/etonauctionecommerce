import { Fragment, useState, useEffect } from 'react';
import {
	Form,
	Input,
	TextArea,
	Button,
	Image,
	Header,
	Message,
	Icon
} from 'semantic-ui-react';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import catchErrors from '../utils/catchErrors';

const INITIAL_PRODUCT = {
	artist: '',
	name: '',
	price: '',
	media: '',
	description: ''
};

function CreateProduct() {
	const [product, setProduct] = useState(INITIAL_PRODUCT);
	const [mediaPreview, setMediaPreview] = useState('');
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [disabled, setDisabled] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const isProduct = Object.values(product).every((el) => Boolean(el));
		isProduct ? setDisabled(false) : setDisabled(true);
	}, [product]);

	function handleChange(event) {
		const { artist, name, value, files } = event.target;
		if (name === 'media') {
			setProduct((prevState) => ({ ...prevState, media: files[0] }));
			
			setMediaPreview(window.URL.createObjectURL(files[0]));
		} else {
			setProduct((prevState) => ({ ...prevState, [name]: value }));
		}
	}

	async function handleImageUpload() {
		// Using form data constructor to get data from the form
		const data = new FormData();
		data.append('file', product.media);
		data.append('upload_preset', 'etonauctionspreset');
		data.append('cloud_name', 'devops-imgcloud');
		const response = await axios.post(process.env.CLOUDINARY_URL, data);
		const mediaUrl = response.data.url;
		return mediaUrl;
	}

	async function handleSubmit(event) {
		try {
			event.preventDefault();
      setLoading(true);
      setError('');
			const mediaUrl = await handleImageUpload();
			// console.log(mediaUrl)
			const url = `${baseUrl}/api/product`;
			const { artist, name, price, description } = product;
			// const payload = { name: '', description, price, mediaUrl };
			const payload = { name, description, price, mediaUrl };
			const response = await axios.post(url, payload);
			
			setProduct(INITIAL_PRODUCT);
			setSuccess(true);
		} catch (error) {
			catchErrors(error, setError);
			// console.error('ERROR!!', error)
		} finally {
			setLoading(false);
		}
	}

	return (
		<Fragment>
			<Header as='h2' block>
				<Icon name='add' color='orange' />
				Create New Product
			</Header>
			<Form
				onSubmit={handleSubmit}
				loading={loading}
				success={success}
				error={Boolean(error)}
			>
				<Message error header='Oops!' content={error} />
				<Message
					success
					icon='check'
					header='Success!'
					content='Your product has been posted'
				/>
				<Form.Group widths='equal'>
					<Form.Field
						control={Input}
						name='artist'
						label='Artist'
						placeholder='Artist'
						value={product.artist}
						onChange={handleChange}
					/>
					<Form.Field
						control={Input}
						name='name'
						label='Name'
						placeholder='Name'
						value={product.name}
						onChange={handleChange}
					/>
					<Form.Field
						control={Input}
						name='price'
						label='Price'
						placeholder='Price'
						min='0.00'
						step='0.01'
						type='number'
						value={product.price}
						onChange={handleChange}
					/>
					<Form.Field
						control={Input}
						name='media'
						type='file'
						label='Media'
						accept='image/*'
						content='Select Image'
						onChange={handleChange}
					/>
				</Form.Group>
				<Image src={mediaPreview} rounded centered size='small' />
				<Form.Field
					control={TextArea}
					name='description'
					label='Description'
					placeholder='Description'
					value={product.description}
					onChange={handleChange}
				/>
				<Form.Field
					control={Button}
					disabled={disabled || loading}
					color='blue'
					icon='pencil alternate'
					content='Submit'
					type='submit'
				/>
			</Form>
		</Fragment>
	);
}

export default CreateProduct;
