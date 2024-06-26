import React from 'react';
import Edit from '../../img/edit.png';
import Delete from '../../img/delete.png';
import Menu from '../../components/menu/Menu';
const Single = () => {
	return (
		<div className="single">
			<div className="content">
				<img
					src="ccccccc"
					alt=""
				/>
				<div className="user">
					<img
						src="ccccccc"
						alt=""
					/>
					<div className="info">
						<h4>John Doe</h4>
						<p>Posted 2 days ago</p>
					</div>
					<div className="edit">
						<Link to={`/write?edit=2`}>
							<img
								src={Edit}
								alt=""
							/>
						</Link>
					</div>
					<div className="delete">
						<img
							src={Delete}
							alt=""
						/>
					</div>
				</div>
				<h1 className="title">Lorem ipsum dolor sit amet</h1>
				<p className="postText">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
				</p>
			</div>
			<Menu />
		</div>
	);
};

export default Single;
