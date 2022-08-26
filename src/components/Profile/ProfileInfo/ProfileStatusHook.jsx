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

    return (
        <div>
            {(editMode ?
                <div>
                    <input autoFocus={true} onBlur={deActivateEditMode} onChange={onStatusChange} value={status} />
                </div> :
                <span onDoubleClick={(props.profile.userId == props.authId)
                    ? activateEditMode
                    :""} >
                    {props.status || "У меня нет статуса"}
                </span>
            )}
        </div>
    )
}

export default ProfileStatusHook