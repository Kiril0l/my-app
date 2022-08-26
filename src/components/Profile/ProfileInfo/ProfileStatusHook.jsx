import React from "react"
import { useEffect } from "react"
import { useState } from "react"



const ProfileStatusHook = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    const isOwner = props.profile.userId == props.authId
    return (
        <div>
            {(editMode ?
                <div>
                    <input autoFocus={true} onBlur={deActivateEditMode} onChange={onStatusChange} value={status} />
                </div> :
                <span onDoubleClick={(isOwner)
                    ? activateEditMode
                    :""} >
                    {props.status || "У меня нет статуса"}
                </span>
            )}
        </div>
    )
}

export default ProfileStatusHook