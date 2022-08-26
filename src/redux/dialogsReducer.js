const ADD_MESSAGE = 'ADD-MESSAGE'
const UPADTE_MESSAGE_TEXT = 'UPADTE-MESSAGE-TEXT'

let startState = {
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
}

const dialogsReducer = (state = startState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newText = state.newMessageText
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: newText, }],
                newMessageText: '',
            }
        }
        case UPADTE_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessageUpdateText,
            }
        }
        default:
            return state
    }
}

export const addNewMessageActionCreater = () => ({ type: ADD_MESSAGE })

export const updateMessageTextActionCreater = (text) =>
    ({ type: UPADTE_MESSAGE_TEXT, newMessageUpdateText: text })


export default dialogsReducer