

import React, {useState} from 'react';
import posts from '../data/posts.json';
import {Link} from "react-router-dom";



function BlogPostPagina() {
    console.log(posts);



        return (
            <>
                <div id="blogpost1">
                    <h1>Blog Post Overview</h1>
                    <h3>Aantal Blog Posts: {posts.length}</h3>
                    <ul id="blogpost2">
                        {posts.map((overview) => {
                            return <li key={overview.id}>
                                <Link to={`/blogposts/${overview.id}`}>
                                    {overview.title}
                                </Link>
                            </li>
                        })}

                    </ul>
                </div>

            </>

        );
    // }
}
export default BlogPostPagina;


