import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { sublinks } from './data';
import { useGlobalContext } from '../../context/NavContext';

const Sidebar = () => {
	const { closeSidebar, isSidebarOpen } = useGlobalContext();
	return (
		<aside
			className={`${
				isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
			}`}
		>
			<div className='sidebar'>
				<button onClick={closeSidebar} className='close-btn'>
					<FaTimes />
				</button>
				<div>
					{sublinks.map((item, index) => {
						const { links, page } = item;
						return (
							<article key={page}>
								{links.map(link => {
									const { category, links_type } = link;
									return (
										<>
											<h4>{category}</h4>
											<div className="sidebar-sublinks">
												{links_type.map(link_type => {
													const { label, url } = link_type;
													return <a href={url}>{label}</a>;
												})}
											</div>
										</>
									);
								})}
							</article>
						);
					})}
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
