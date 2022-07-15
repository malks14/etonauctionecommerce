import { Item, Label } from 'semantic-ui-react';
import AddProductToCart from './AddProductToCart';


const styles = {
	item: {
		backgroundColor: "red"
	},
}

function ProductSummary({ _id, artist, name, mediaUrl, sku, price, user }) {
	return (
		<>
		<Item.Group>
			<Item className='item'>
				<Item.Image size='medium' src={mediaUrl} />
				<Item.Content>
					<Item.Header className='tem'>{name}</Item.Header>
					<Item.Content>{artist}</Item.Content>
					<Item.Description>
						<p>${price}</p>
						<Label>SKU: {sku}</Label>
					</Item.Description>
					<Item.Extra>
						<AddProductToCart user={user} productId={_id} />
					</Item.Extra>
				</Item.Content>
			</Item>
		</Item.Group>
		<style jsx>{`
			.ui.item.item {
				background-color:  red;
			}
		`}</style>
		</>
	);
}

export default ProductSummary;
