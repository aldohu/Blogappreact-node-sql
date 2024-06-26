import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
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
		<div className="home">
			<div className="posts">
				{posts.map((post) => (
					<div
						className="post"
						key={post.id}
					>
						<div className="img">
							<img
								src={post.img}
								alt={post.title}
							/>
						</div>
						<div className="content">
							<Link
								className="link"
								to={`/post/${post.id}`}
							>
								<h2>{post.title}</h2>
								<p>{post.desc}</p>
								<button>Read more</button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Home;
