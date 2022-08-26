import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator } from '../../redux/profileReducer'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { WithAuthContainer } from '../../hoc/withAuthContainer';
import { compose } from 'redux';

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userid
        if (!userId) {
            userId = this.props.authId
        }
        this.props.getUserProfileThunkCreator(userId)
        this.props.getUserStatusThunkCreator(userId)
    }

    render() {
        return <div >
            <div>
                <Profile {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateUserStatusThunkCreator}
                    authId={this.props.authId} />
            </div>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

function withRouter(Component) {
    function ComponentWithRouterProps(props) {
        let location = useLocation()
        let navigate = useNavigate()
        let params = useParams()
        return (<Component {...props} router={{ location, navigate, params }} />)
    }
    return ComponentWithRouterProps
}

export default compose(
    connect(mapStateToProps, { getUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator }),
    withRouter,
    WithAuthContainer,
)(ProfileAPIContainer)

// const AuthContainerComponent = WithAuthContainer(ProfileAPIContainer)
// const ProfileContainer = connect(mapStateToProps, { getUserProfileThunkCreator })(withRouter(AuthContainerComponent));
//  ProfileContainer