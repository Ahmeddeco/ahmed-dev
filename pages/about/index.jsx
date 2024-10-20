import { useState } from 'react'
import Circles from '../../components/Circles'
import Avatar from '../../components/Avatar'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { aboutData } from '../../constants'
import CountUp from 'react-countup'

const About = () => {
	const [index, setIndex] = useState(0)

	return (
		<div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
			<Circles />
			{/* avatar image */}
			<motion.div
				variants={fadeIn('right', 0.2)}
				initial='hidden'
				animate='show'
				exit='hidden'
				className='hidden xl:flex absolute bottom-0 -left-[320px]'
			>
				<Avatar />
			</motion.div>
			<div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 '>
				{/* text */}
				<div className='flex-1 flex flex-col justify-center '>
					<h2 className='h2'>
						Captivating <span className='text-accent'>stories</span> birth
						magnificent design
					</h2>
					<p className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
						many years ago, I began freelancing as a developer. Since then, I
						have done remote work for agencies, consulted for startups, and
						collaborated on digital products for business and consumer use.
					</p>
					{/* counters */}
					<div className=''>
						<div className=''>
							{/* experience */}
							<div className=''>experience</div>
						</div>
					</div>
				</div>
				{/* info */}
				<div className='flex flex-col w-full xl:max-w-[48%] h-[480px] '>
					<div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
						{aboutData.map((item, itemIndex) => {
							return (
								<div
									key={itemIndex}
									className={`${
										index === itemIndex &&
										'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
									}cursor-pointer capitalize xl:text-lg relative after:w-8 after:hover:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
									onClick={() => setIndex(itemIndex)}
								>
									{item.title}
								</div>
							)
						})}
					</div>
					<div className=' py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
						{aboutData[index].info.map((item, itemIndex) => {
							return (
								<div
									className='flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
									key={itemIndex}
								>
									{/* title */}
									<div className='font-light mb-2 md:mb-0'>{item.title}</div>
									<div className='hidden md:flex'>-</div>
									<div className=''>{item.stage}</div>
									<div className='flex gap-x-4'>
										{/* icons */}
										{item.icons?.map((icon, itemIndex) => {
											return (
												<div className='text-2xl text-white' key={itemIndex}>
													{icon}
												</div>
											)
										})}
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
