import React from 'react';
import cssStyle from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElements = [...props.posts].reverse().map(
        (p) => <Post message={p.message} author={p.author} like={p.like} key={p.id} />
    )

    let onAddNewPost = () => {
        props.addNewPost()
    }

    let onPostChange = (event) => {
        let text = event.target.value
        props.updateNewPostText(text)
    }

    return <div className={cssStyle.content}>
        <div className={cssStyle.item}>
            My Posts
            <div>
                <textarea name="post" id="" cols="30" rows="1" onChange={onPostChange} value={props.newPostText} />
                <button onClick={onAddNewPost}>Add post</button>
                {postsElements}
            </div>
        </div>
    </div>
}

export default MyPosts;
