import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Socials from './Socials'

const Header = () => {
	return (
		<header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
			<div className='container mx-auto'>
				<div className='flex flex-col lg:flex-row justify-between items-center gap-y-6  py-8'>
					{/* logo */}
					<Link href={'/'}>
						<h2 className='text-4xl font-black '>
							Ahmed
							<span className='text-2xl text-accent font-normal'> Dev.</span>
						</h2>
					</Link>
					{/* Socials */}
					<Socials />
				</div>
			</div>
		</header>
	)
}

export default Header
