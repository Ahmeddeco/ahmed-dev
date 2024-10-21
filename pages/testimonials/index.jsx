import TestimonialSlider from '../../components/TestimonialSlider'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Testimonials = () => {
	return (
		<div className='h-dvh bg-primary/30 py-32 text-center '>
			<div className='container mx-auto h-full flex flex-col justify-center'>
				{/* title */}
				<motion.h2
					variants={fadeIn('up', 0.3)}
					initial='hidden'
					animate='show'
					exit='hidden'
					className='h2 capitalize mb-8 xl:mb-0'
				>
					what clients <span className='text-accent'>say.</span>
				</motion.h2>
				{/* slider */}
				<motion.div
					variants={fadeIn('up', 0.6)}
					initial='hidden'
					animate='show'
					exit='hidden'
					className=''
				>
					<TestimonialSlider />
				</motion.div>
			</div>
		</div>
	)
}

export default Testimonials
