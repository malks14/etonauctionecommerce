
import Head from 'next/head';
import Header from './Header';
import HeadContent from './HeadContent';
import Footer from './Footer';

function Layout({ children, user }) {
	return (
		<div>
			<div>
				<Head>
					<HeadContent />
					{/* Stylesheets */}
					<link
						rel="preload"
						href="/fonts/JosefinSans-Bold.ttf"
						as="font"
						crossOrigin=""
					/>
					<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;400&display=swap" rel="stylesheet"></link>
					<link rel='stylesheet' type='text/css' href='/static/styles.css' />
					<link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
					<link
						rel='stylesheet'
						href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
					/>
					<title>Eton Auctions</title>
				</Head>
				<Header user={user} />
				<div className='childrenWrapper'>
					<div className='childrenMain'>
						{children}
					</div>
					<Footer/>
				</div>
			</div>
			<style jsx>{`
				.childrenWrapper {
					padding-top: 120px;
				}

				.childrenMain {
					height: auto;
					margin: 0 auto;
					min-height: calc(100vh - 120px);
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					font-family: 'Josefin Sans', sans-serif;
				}
			`}</style>
		</div>
	);
}

export default Layout;