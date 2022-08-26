import React from 'react';
// import Context from '../../../Context';
import { connect } from 'react-redux'
import { updateNewPostTextActionCreater, addPostActionCreater } from '../../../redux/profileReducer'
import MyPosts from './MyPosts';



// const MyPostsContainer = (props) => {
// let state = props.store.getState()

// let addNewPost = () => {
//     props.store.dispatch(addPostActionCreater());
// }

// let onPostChange = (text) => {
//     props.store.dispatch(updateNewPostTextActionCreater(text))


//     return (
//         <Context.Consumer>{
//             (store) => {
//                 let state = store.getState()

//                 let addNewPost = () => {
//                     store.dispatch(addPostActionCreater());
//                 }

//                 let onPostChange = (text) => {
//                     store.dispatch(updateNewPostTextActionCreater(text))
//                 }

//                 return <MyPosts
//                     addNewPost={addNewPost}
//                     updateNewPostText={onPostChange}
//                     newPostText={state.profilePage.newPostText}
//                     posts={state.profilePage.posts} />

//             }
//         }
//         </Context.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addPostActionCreater())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreater(text))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
