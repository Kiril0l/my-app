import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sitebarReducer from "./sitebarReducer"


let stateObject = {
    _state: {
        profilePAge: {
            posts: [
                { id: 1, message: 'Hi', author: 'Kirill Zuzin', like: '5' },
                { id: 2, message: 'Good night', author: 'Anna Kolina', like: '15' },
                { id: 3, message: 'How are you?', author: 'Artem Lapkin', like: '11' },
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Masechka' },
                { id: 2, name: 'Poppy' },
                { id: 3, name: 'Shirma' },
                { id: 4, name: 'Kiryl' }
            ],

            messages: [
                { id: 1, message: 'I Love you!' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'What does thise dishe include?' },
                { id: 4, message: "I'm the same message" }
            ],
            newMessageText: '',
        },
        sitebar: {
            topFriends: [
                { id: 1, name: 'Masya', image: 'https://cdn2.vectorstock.com/i/1000x1000/35/96/heart-cartoon-icon-vector-10093596.jpg' },
                { id: 2, name: 'Poppy', image: 'https://media.istockphoto.com/vectors/red-poppy-flower-vector-id1138208768?k=20&m=1138208768&s=612x612&w=0&h=voVeQkdFBuulku6FJp3EPpxpSj0uF7_YXCf2AUVS54M=' },
                { id: 3, name: 'Shirma', image: 'https://i5.walmartimages.com/asr/ae60aa3b-a3ae-4213-b483-7bb277bcb9ad_1.cc2dccd7100f18a0e05b946ca3e1fffb.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' },
            ],
        }

    },

    getState() {
        return this._state
    },

    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePAge = profileReducer(this._state.profilePAge, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sitebar = sitebarReducer(this._state.sitebar)
        this._callSubscriber(this._state)
    },
}


export default stateObject