import React from 'react';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
const Write = () => {
	const [value, setValue] = useState('');
	return (
		<div className="add">
			<div className="content">
				<input
					type="text"
					placeholder="Title"
				/>
				<div className="editorContainer">
					<ReactQuill
						className="editor"
						theme="snow"
						value={value}
						onChange={setValue}
					/>
				</div>
			</div>
			<div className="menu">
				<div className="item">
					<h1>Publish</h1>
					<span>
						<b>Status:</b> Draft
					</span>
					<span>
						<b>Visibility:</b> Public
					</span>
					<input
						style={{ display: 'none' }}
						type="file"
						name=""
						id="file"
					/>
					<label
						className="file"
						htmlFor="file"
					>
						Upload image
					</label>
					<div className="buttons">
						<button>Save as draft</button>
						<button>Update</button>
					</div>
				</div>
				<div className="item">
					<h1>Category</h1>
					<div className="cat">
						<input
							type="radio"
							name="cat"
							id="art"
							value="art"
						/>
						<label htmlFor="art">Art</label>
					</div>

					<div className="cat">
						<input
							type="radio"
							name="cat"
							id="science"
							value="science"
						/>
						<label htmlFor="science">Science</label>
					</div>

					<div className="cat">
						<input
							type="radio"
							name="cat"
							id="technology"
							value="technology"
						/>
						<label htmlFor="technology">Technology</label>
					</div>

					<div className="cat">
						<input
							type="radio"
							name="cat"
							id="cinema"
							value="cinema"
						/>
						<label htmlFor="cinema">Cinema</label>
					</div>

					<div className="cat">
						<input
							type="radio"
							name="cat"
							id="design"
							value="design"
						/>
						<label htmlFor="design">Design</label>
					</div>

					<div className="cat">
						<input
							type="radio"
							name="cat"
							id="food"
							value="food"
						/>{' '}
						<label htmlFor="other">Food</label>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Write;
