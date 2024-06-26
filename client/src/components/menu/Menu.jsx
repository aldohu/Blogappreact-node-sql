import React from 'react';

const Menu = () => {
	const posts = [
		{
			id: 1,
			title: 'Walnut Benefits for Health',
			desc: 'Walnuts are rich in omega-3 fatty acids and antioxidants.',
			img: 'https://example.com/walnut.jpg',
		},
		{
			id: 2,
			title: 'Healthy Grilled Chicken Salad',
			desc: 'A nutritious salad with grilled chicken, mixed greens, and a light vinaigrette.',
			img: 'https://example.com/grilled-chicken-salad.jpg',
		},
		{
			id: 3,
			title: 'Refreshing Greek Yogurt with Berries',
			desc: 'A delicious combination of Greek yogurt and fresh mixed berries.',
			img: 'https://example.com/greek-yogurt-berries.jpg',
		},
		{
			id: 4,
			title: 'Baked Salmon with Vegetables',
			desc: 'A healthy dinner option with baked salmon, sweet potatoes, and broccoli.',
			img: 'https://example.com/baked-salmon.jpg',
		},
		{
			id: 5,
			title: 'Quinoa Bowl with Black Beans',
			desc: 'A protein-packed quinoa bowl with black beans, corn, and avocado.',
			img: 'https://example.com/quinoa-bowl.jpg',
		},
	];
	return (
		<div>
			<h1>Other posts you may like</h1>
			{posts.map((post) => (
				<div
					className="post"
					key={post.id}
				>
					<img
						src={post.img}
						alt={post.title}
					/>

					<h2>{post.title}</h2>
					<p>{post.desc}</p>
				</div>
			))}
		</div>
	);
};

export default Menu;
