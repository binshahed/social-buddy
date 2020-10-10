import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import { Grid } from '@material-ui/core';
import './AllPost.css'



const AllPost = () => {
    const [posts, setPosts]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return (

        <div>
            <div className="nav">
               <a href=""> <p className='public-post'>Public Post</p></a>
                <a href=""><p>Friends Post</p></a>
            </div>

            <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}>
            {
                posts.map(pt => <Post key={posts.id} post={pt}></Post>)
            }
            </Grid>
        </div>
    );
};

export default AllPost;