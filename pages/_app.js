import App from 'next/app';
import Layout from '../components/_App/Layout';
import { parseCookies, destroyCookie } from 'nookies';
import { redirectUser } from '../utils/auth';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import Router from 'next/router';
import { AnimatePresence } from "framer-motion";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		
		const { token } = parseCookies(ctx);
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		if (!token) {
			const isProtectedRoute =
				ctx.pathname === '/account' || ctx.pathname === '/create';
		
			if (isProtectedRoute) {
				redirectUser(ctx, '/login');
			}
		} else {
			
			try {
				const payload = { headers: { Authorization: token } };
				const url = `${baseUrl}/api/account`;
				const response = await axios.get(url, payload);
				const user = response.data;
				const isRoot = user.role === 'root';
				const isAdmin = user.role === 'admin';
				const isNotPermitted =
					!(isRoot || isAdmin) && ctx.pathname === '/create';
				if (isNotPermitted) {
					redirectUser(ctx, '/');
				}
				
				pageProps.user = user;
			} catch (error) {
				console.error('Error getting current user', error);
				
				destroyCookie(ctx, 'token');
				
				redirectUser(ctx, '/login');
			}
		}

		return { pageProps };
	}

	componentDidMount() {
		window.addEventListener('storage', this.syncLogout);
	}

	syncLogout = (event) => {
		if (event.key === 'logout') {
			// console.log('Logged out from storage')
			Router.push('/login');
		}
	};

	render() {
		const { Component, pageProps, router } = this.props;
		return (
			<AnimatePresence exitBeforeEnter>
				<Layout {...pageProps}>
					<Component {...pageProps} key={router.route}/>
				</Layout>
			</AnimatePresence>
		);
	}
}

export default MyApp;
