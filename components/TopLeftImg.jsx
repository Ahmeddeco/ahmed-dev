import Image from 'next/image'
import React from 'react'

const TopLeftImg = () => {
	return (
		<div className='absolute top-0 left-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50 h-auto'>
			<Image
				src='/top-left-img.avif'
				alt='banner'
				width={411}
				height={405}
				priority
			/>
		</div>
	)
}

export default TopLeftImg
