import { connect } from 'react-redux'
import { unFollowThunkCreator, followThunkCreator, getUsersThunkCreator, changeCurrentPageThunkCreator} from "../../redux/usersReducer"
import React from 'react'
import Users from './Users'
import Loader from '../Loader/Loader'
import { getCurrentPage, getFollowingInProgress, getIsLoading, getPageSize, getPortionPage, getTotalUsersCount, getUsersSuperSelector } from '../../redux/users-selector'


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.changeCurrentPageThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            <div>
                {this.props.isLoading ? <Loader /> : null}
            </div>
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                portionPage = {this.props.portionPage}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                unFollowThunkCreator={this.props.unFollowThunkCreator}
                followThunkCreator={this.props.followThunkCreator}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state),
        portionPage: getPortionPage(state)
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         pageSize: state.usersPage.pageSize,
//         currentPage: state.usersPage.currentPage,
//         isLoading: state.usersPage.isLoading,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }

// let mapDispatchToProps = (dispatc) => {
//     return {
//         follow: (userId) => {
//             dispatc(follow(userId))
//             // в диспатч передаем наш action creator
//         },
//         unfollow: (userId) => {
//             dispatc(unFollow(userId))
//         },
//         setUsers: (users) => {
//             dispatc(setUsers(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatc(setCurrentPage(currentPage))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatc(setTotalUsersCount(totalCount))
//         },
//         switchIsLoading: (isLoading) => {
//             dispatc(switchIsLoading(isLoading))
//         }
//     }
// }

const UsersContainer = connect(mapStateToProps, {
    unFollowThunkCreator,
    followThunkCreator,
    getUsersThunkCreator,
    changeCurrentPageThunkCreator})(UsersAPIComponent)

// вместо всего mapDispatchToProps можно передать объект, который содержит имя параметра, которое пойдет в пропсы в след компоненту 
// и наш action creator. т.к. эти имена совпадают, то можно написать только одно и js сам все додумает. а внутри connect сама 
// создасться коллбэк функция, которая нам нужна

export default UsersContainer