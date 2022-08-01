import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../api/fetchPosts'
import { Post } from './Post'
import { v4 as uuid } from 'uuid'

const PostList = ({ page }) => {
	const [data, setData] = useState(null)

	useEffect(() => {
		fetchPosts(page)
			.then(data => setData(data))
	}, [page])

	// console.log(data);
	return (
		<>
			{!data
				? <div className="loader">Loading...</div>
				: data.map(post =>
					<Post title={post.title} body={post.body} key={uuid()} />)
			}
		</>
	)
}

export { PostList }