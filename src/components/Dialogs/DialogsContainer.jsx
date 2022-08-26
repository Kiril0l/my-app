import { connect } from 'react-redux'
import { compose } from 'redux'
import { WithAuthContainer } from '../../hoc/withAuthContainer'
import { addNewMessageActionCreater, updateMessageTextActionCreater } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

// const DialogsContainer = (props) => {

// let state = props.store.getState()

// let addNewMessage = () => {
//     props.store.dispatch(addNewMessageActionCreater())
// }

// let onMessageChange = (text) => {
//     // event - в этот параметр приходит, что в нашем textarea происходят изменения(ввод символов). 
//     // И эти изменения мы уже передаем в нашу БД, чтоб записать и отобразить для пользователя
//     props.store.dispatch(updateMessageTextActionCreater(text))
// }

//     return (
//         <Context.Consumer>{
//             (store) => {
//                 let state = store.getState()
//                 let addNewMessage = () => {
//                     store.dispatch(addNewMessageActionCreater())
//                 }

//                 let onMessageChange = (text) => {
//                     // event - в этот параметр приходит, что в нашем textarea происходят изменения(ввод символов). 
//                     // И эти изменения мы уже передаем в нашу БД, чтоб записать и отобразить для пользователя
//                     store.dispatch(updateMessageTextActionCreater(text))
//                 }
//                 return <Dialogs
//                     updateMessageText={onMessageChange}
//                     addNewMessage={addNewMessage}
//                     dialogs={state.dialogsPage.dialogs}
//                     messages={state.dialogsPage.messages}
//                     newMessageText={state.dialogsPage.newMessageText} />
//             }

//         }

//         </Context.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (text) => {
            dispatch(updateMessageTextActionCreater(text))
        },
        addNewMessage: () => {
            dispatch(addNewMessageActionCreater())
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthContainer,
)(Dialogs)

// const AuthContainerComponent = WithAuthContainer(Dialogs)


// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthContainerComponent)
