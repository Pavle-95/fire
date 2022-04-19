import style from '../header/header.module.scss'
import React, {useState, useEffect} from 'react';

const Header = () =>{

    const [posts, setPosts] = useState();
    

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            return response.json();
        })
        .then(resJson =>{
            setPosts(resJson.length)
        })
    },[])


    return(
        <div className={style.div} >
            <h1>Post found: {posts}</h1>
        </div>
    )
}

export default Header;