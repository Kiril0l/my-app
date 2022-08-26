import profileReducer, { addPostActionCreater, updateNewPostTextActionCreater } from "./profileReducer";


test('the post should be added', () => {
    let update = updateNewPostTextActionCreater("Hello")
    let newPost = addPostActionCreater()
    let state = {
        posts: [
            { id: 1, message: 'Hi', author: 'Kirill Zuzin', like: '5' },
            { id: 2, message: 'Good night', author: 'Anna Kolina', like: '15' },
            { id: 3, message: 'How are you?', author: 'Artem Lapkin', like: '11' },
        ],
        newPostText: '',
    }
    profileReducer(state, update)
    let newState = profileReducer(state, newPost)
    expect(newState.posts.length).toBe(4)
  });
  