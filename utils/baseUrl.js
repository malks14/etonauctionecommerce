const baseUrl =
	process.env.NODE_ENV === 'production'
		? 'https://eton-auctions.vercel.app'
		: 'http://localhost:3000';

export default baseUrl;
