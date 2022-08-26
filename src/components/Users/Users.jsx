import React from 'react'
import Paginator from './Paginator';
import User from './User';


let Users = (props) => {


    return <div>
        <Paginator totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            onPageChanged={props.onPageChanged}
            portionPage={props.portionPage}
            currentPage={props.currentPage} />
        {
            props.users.map(u => <User
                user={u}
                key={u.id}
                unFollowThunkCreator={props.unFollowThunkCreator}
                followThunkCreator={props.followThunkCreator}
                followingInProgress={props.followingInProgress}
            />)}
    </div>
}

export default Users