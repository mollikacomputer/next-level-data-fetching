import Link from 'next/link';
import React from 'react';

const PostPage = async() => {
    const res = await fetch("http://localhost:5000/posts",{
        next:{
            revalidate:5,
        },
    });
    const posts = await res.json();
    return (
        <div className=' text-center w-full'>

                <h1 className='text-4xl'> Show All Posts</h1>
                <h2 className='text-2xl'> Total Posts : {posts.length}</h2>
                {
                    posts.map((post)=>(
                        <div key={post.id} className="card bg-gray-100 shadow-xl my-4 w-[70%] mx-auto">
                            <div className="card-body">
                                <h2 className="card-title">{post.title}</h2>
                                <p>{post.description}</p>
                                <p> Likes: {post.like_counts}</p>
                                <div className="card-actions justify-end">
                                <Link href={`/posts/${post.id}`}>
                                    <button className="btn btn-primary">See More</button>
                                </Link>
                                </div>
                            </div>
                            </div>
                    ))
                }

        </div>
    );
};

export default PostPage;