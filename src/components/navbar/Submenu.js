import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../../context/NavContext';

const Submenu = () => {
	const {
		isSubmenuOpen,
		location,
		page: { links },
	} = useGlobalContext();
	const container = useRef(null);
	const [columns, setColumns] = useState('col-2');
	useEffect(() => {
		setColumns('col-2');
		const submenu = container.current;
		const { center, bottom } = location;
		submenu.style.left = `${center}px`;
		submenu.style.top = `${bottom}px`;

		if (links.length === 3) {
			setColumns('col-3');
		}
		if (links.length > 3) {
			setColumns('col-4');
		}
	}, [location, links]);

	return (
		<aside
			className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
			ref={container}
		>
			{links.map(link => {
				const { category, links_type } = link;
				return (
					<>
						<h4>{category}</h4>
						<div className={`submenu-center ${columns}`}>
							{links_type.map(link_type => {
								const { label, url } = link_type;
								return <a href={url}>{label}</a>;
							})}
						</div>
					</>
				);
			})}
		</aside>
	);
};

export default Submenu;
