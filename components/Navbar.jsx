'use client'

import { navData } from '../constants'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
	const router = useRouter()
	const pathname = usePathname()

	return (
		<nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:w-max-md xl:h-screen'>
			{/* inner */}
			<div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
				{navData.map(({ icon, name, path }) => {
					return (
						<Link
							href={path}
							key={name}
							className={`${
								path === pathname && 'text-accent'
							} relative flex items-center group hover:text-accent transition-all duration-300`}
						>
							{/* tooltip */}
							<div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
								<div className='bg-white relative flex text-primary items-center p-2 rounded-md'>
									<div className='text-base leading-none font-semibold capitalize '>
										{name}
									</div>
									{/* triangle */}
									<div className='border-solid border-l-white border-l-8 border-y-transparent border-y-4 border-r-0 absolute -right-2' />
								</div>
							</div>
							{/* icons */}
							<div className=''>{icon}</div>
						</Link>
					)
				})}
			</div>
		</nav>
	)
}

export default Navbar
