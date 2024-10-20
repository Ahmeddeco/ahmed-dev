import Layout from '../components/Layout'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import Transition from '../components/Transition'

function MyApp({ Component, pageProps }) {
	const router = useRouter()

	return (
		<Layout>
			<AnimatePresence mode='wait'>
				<motion.div className='h-full' key={router.route}>
					<Transition />
					<Component {...pageProps} />;
				</motion.div>
			</AnimatePresence>
		</Layout>
	)
}

export default MyApp
