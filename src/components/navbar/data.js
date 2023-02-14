export const links = [
	{ id: 1, text: 'Venues', url: '/venues' },
	{ id: 2, text: 'Vendors', url: '/vendors' },
	{ id: 3, text: 'E-Invites', url: '/e-invites' },
];

export const sublinks = [
	{
		page: 'Venues',
		links: [
			{
				category: 'By Type',
				links_type: [
					{ label: 'Banquet Halls' },
					{ label: 'Lawns/Farmhouses' },
					{ label: 'Resorts' },
					{ label: 'Small Function / Party Halls' },
					{ label: 'Destination Weddings' },
					{ label: 'Kalyana Mandapams' },
					{ label: '4 Stars & Above Hotels' },
				],
			},
		],
	},
	{
		page: 'Vendors',
		links: [
			{
				category: 'Photographers',
				links_type: [{ label: 'Photographers' }, { label: 'Cinema/Video' }],
			},
			{
				category: 'Makeup',
				links_type: [{ label: 'Bridal Makeup' }, { label: 'Family Makeup' }],
			},
		],
	},
	{
		page: 'E-Invites',
		links: [
			{
				category: 'Wedding Invitation Maker',
				links_type: [
					{ label: 'Wedding Card Designs' },
					{ label: 'Invitation Video Templates' },
					{ label: 'Save the Date Templates' },
				],
			},
		],
	},
];
