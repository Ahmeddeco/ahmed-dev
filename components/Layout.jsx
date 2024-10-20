import { Sora } from '@next/font/google'
import TopLeftImg from '../components/TopLeftImg'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const sora = Sora({
	subsets: ['latin'],
	variable: '--font-sora',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

const Layout = ({ children }) => {
	return (
		<div
			className={`page text-white bg-cover bg-no-repeat bg-site font-sora relative ${sora.variable}`}
		>
			<TopLeftImg />
			<Navbar />
			<Header />
			{children}
		</div>
	)
}

export default Layout
