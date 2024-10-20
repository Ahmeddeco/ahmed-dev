import Link from 'next/link'
import { socials } from '../constants'

const Socials = () => {
	return (
		<div className='flex items-center gap-x-5 text-lg'>
			{socials.map(({ icon, id, link, title }) => {
				return (
					<Link
						href={link}
						key={id}
						target='_blank'
						className='hover:text-accent transition-all duration-300'
					>
						{icon}
					</Link>
				)
			})}
		</div>
	)
}

export default Socials
