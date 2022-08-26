import React from "react"



class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState ){
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {(this.state.editMode ?
                    <div>
                        <input autoFocus={true} onBlur={this.deActivateEditMode} onChange={this.onStatusChange} value={this.state.status} />
                    </div> :
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.status || "У меня нет статуса"}
                    </span>
                )}
            </div>
        )
    }
}

export default ProfileStatus