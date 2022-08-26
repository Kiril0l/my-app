import React from 'react'
import { Navigate } from 'react-router-dom'
import DialogName from './DialogName/DialogsName'
import cssStyle from './Dialogs.module.css'
import Messages from './Messages/Messages'

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(
        d => <DialogName id={d.id} name={d.name} key={d.id} />
    )

    let messagesElements = props.messages.map(
        m => <Messages text={m.message} key={m.id} />
    )

    let onAddNewMessage = () => {
        props.addNewMessage()
    }

    let onMessageChange = (event) => {
        let text = event.target.value
        props.updateMessageText(text)
        // event - в этот параметр приходит, что в нашем textarea происходят изменения(ввод символов). 
        // И эти изменения мы уже передаем в нашу БД, чтоб записать и отобразить для пользователя
        // props.dispatch(updateMessageTextActionCreater(text))
    }

    return (
        <div className={cssStyle.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={cssStyle.messages}>
                {messagesElements}
            </div>
            <div></div>
            <div>
                <textarea name="message" cols="50" rows="2" onChange={onMessageChange} value={props.newMessageText} ></textarea>
                <button onClick={onAddNewMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;