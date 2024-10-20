import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Circles from '../../components/Circles'
import Bulb from '../../components/Bulb'
import WorkSlider from '../../components/WorkSlider'

const Work = () => {
	return (
		<div className='h-dvh bg-primary/30 py-36 flex justify-center m-auto  items-center '>
			<Circles />
			<div className='container mx-auto '>
				<div className='flex flex-col  xl:flex-row xl:items-center gap-x-8 '>
					{/* text */}
					<div className='text-center flex  xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
						<motion.h2
							variants={fadeIn('up', 0.3)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='h2 capitalize'
						>
							my Work <span className='text-accent'>.</span>
						</motion.h2>
						<motion.p
							variants={fadeIn('up', 0.6)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='mb-4 max-w-[400px] mx-auto lg:mx-0'
						>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
							repellendus numquam cum, a dolorum itaque qui ipsa quas nesciunt
							animi facilis quaerat odio veniam dolor asperiores omnis commodi,
							quia cumque.
						</motion.p>
					</div>
					{/* slider */}
					<motion.div
						variants={fadeIn('down', 0.9)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='w-full xl:max-w-[65%]'
					>
						<WorkSlider />
					</motion.div>
				</div>
			</div>
			<Bulb />
		</div>
	)
}

export default Work
