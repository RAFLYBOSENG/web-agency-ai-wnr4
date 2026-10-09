import React,{useRef,useState} from 'react'
import { motion } from 'motion/react'

const ServiceCard = ({ service,index}) => {

	const [position, setPosition] = useState({ x: 0, y: 0 })
	const [visible, setVisible] = useState(false);
	const divref = useRef(null)

	const handleMouseMove = (e) => {
			const bounds = divref.current.getBoundingClientRect();
			setPosition({
				x: e.clientX - bounds.left,
				y: e.clientY - bounds.top
			})
		}

	return (
		<motion.div
		initial={{ opacity: 0, y: 30 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5, delay: index * 0.2 }}
		className={`relative overflow-hidden max-w-lg m-2 rounded-xl border border-gray-200 sm:m-4 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10`} onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)} ref={divref} onMouseMove={handleMouseMove}>
			
			<div className={`pointer-events-none absolute z-0 h-75 w-75 blur-2xl rounded-full bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'} `} style={{ top: position.y - 150, left: position.x - 150}} />
			
			<div className="relative z-10 flex items-center gap-10 rounded-[10px] bg-white p-8 transition-all hover:m-0.5 hover:p-7.5 dark:bg-gray-900">
				{/* GAMBAR ICON SERVICES */}
				<div className="rounded-full bg-gray-100 dark:bg-gray-700">
					<img src={service.icon} alt={service.title} className="m-2 max-w-24 rounded-full bg-white dark:bg-gray-900" />
				</div>
				{/* TULISAN SERVICES */}
				<div className="flex-1">
					<h3 className="font-bold">{service.title}</h3>
					<p className="mt-2 text-sm">{service.description}</p>
				</div>
			</div>
		</motion.div>
	);
};

export default ServiceCard;