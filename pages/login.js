import { Fragment, useState, useEffect } from 'react';
import { Button, Form, Icon, Message } from 'semantic-ui-react';
import Link from 'next/link';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import catchErrors from '../utils/catchErrors';
import { handleLogin } from '../utils/auth';
import styled from 'styled-components';

const INITIAL_USER = {
	email: '',
	password: ''
};

function Signup() {
	const [user, setUser] = useState(INITIAL_USER);
	const [disabled, setDisabled] = useState(true);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const isUser = Object.values(user).every((el) => Boolean(el));
		isUser ? setDisabled(false) : setDisabled(true);
	}, [user]);

	function handleChange(event) {
		const { name, value } = event.target;
		setUser((prevState) => ({ ...prevState, [name]: value }));
	}

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			setLoading(true);
			setError('');
			const url = `${baseUrl}/api/login`;
			const payload = { ...user };
			const response = await axios.post(url, payload);
			handleLogin(response.data);
		} catch (error) {
			catchErrors(error, setError);
		} finally {
			setLoading(false);
		}
	}

	return (
		<Wrapper>
			<Segment>
				<h1>Welcome back!</h1>
				<p>Log in with email and password</p>
			</Segment>
			<Form onSubmit={handleSubmit} loading={loading} error={Boolean(error)}>
				<Message error header='Oops!' content={error} />
				<Segment>
					<h2>Email</h2>
					<input label='Email' placeholder='Email' name='email' type='email' value={user.email} onChange={handleChange} />
					<h2>Password</h2>
					<input label='Password' placeholder='Password' name='password' type='password' value={user.password} onChange={handleChange} />
					<Button
						disabled={disabled || loading}
						icon='sign in'
						type='submit'
						color='orange'
						content='Login'
						style={{margin: '2rem auto', width:  "100%", cursor: "pointer"}}
					/>
				</Segment>
			</Form>
			<Message attached='bottom' warning>
				<Icon name='help' />
				New user?{' '}
				<Link href='/signup'>
					<a>Sign up here</a>
				</Link>
				{'  '}instead.
			</Message>
		</Wrapper>
	);
}

export default Signup;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 100px auto;
	height: auto;
`

const Segment = styled.div`
	width: 100%;
	max-width: 450px;
	margin: 0 auto;
	padding: 1em;
	background-color: #fff;
	text-align: center;
`;