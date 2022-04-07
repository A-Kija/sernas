import {useEffect, useState} from 'react';
import axios from 'axios';
import PostTitle from './PostTitle';
function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data);
            setPosts(res.data.sort((a,b) => b.title.length - a.title.length));
        })

    }, []);

    return (
        <ul>
            {
                posts.map(u => <PostTitle key={u.id} post={u}></PostTitle>)
            }
        </ul>
    )
}

export default Posts;