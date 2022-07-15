import AccountHeader from '../components/Account/AccountHeader';
import AccountOrders from '../components/Account/AccountOrders';
import AccountPermissions from '../components/Account/AccountPermissions';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { parseCookies } from 'nookies';
import styled from 'styled-components';

function Account({ user, orders }) {
	return (
		<Wrapper>
			<AccountHeader {...user} />
			<AccountOrders orders={orders} />
			{user.role === 'root' && <AccountPermissions />}
		</Wrapper>
	);
}

Account.getInitialProps = async (ctx) => {
	const { token } = parseCookies(ctx);
	if (!token) {
		return { orders: [] };
	}
	const payload = { headers: { Authorization: token } };
	const url = `${baseUrl}/api/orders`;
	const response = await axios.get(url, payload);
	return response.data;
};
export default Account;


const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: auto;
	height: auto;
`
