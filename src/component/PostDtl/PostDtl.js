import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comment';
import './PostDtl.css'

const PostDtl = () => {
    const {postId}=useParams()
    const [post, setPost]=useState({})
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    const [comments, setComments]=useState([])

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])




    return (
        <div className="commentSection">
            <h1>{post.title}</h1>
            <h4>{post.body}</h4>

            <p> Comment: {
                comments.map(comment => <Comments comment={comment}></Comments>)  
            }</p>
           
            

        </div>
    );
};

export default PostDtl;