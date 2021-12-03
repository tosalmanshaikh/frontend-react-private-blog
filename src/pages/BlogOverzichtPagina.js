import React from 'react';
import {useParams} from "react-router-dom";
import posts from "../data/posts.json";
import {useHistory} from "react-router-dom";


function BlogOverzichtPagina() {

    const history = useHistory()

    function returnHome (){
        history.push('/')
    }

    const { blogId } = useParams()

    const currentPost = posts.find((postId) => {
        return postId.id === blogId;
    })

    return (
        <div>
            <h1>Blog Overzicht Pagina</h1>
            <h3>{currentPost.title}</h3>
            <h4>{currentPost.data}</h4>
            <p>{currentPost.content}</p>

            <button type="button" onClick={returnHome}>Terug naar home pagina </button>

        </div>
    );
}

export default BlogOverzichtPagina;