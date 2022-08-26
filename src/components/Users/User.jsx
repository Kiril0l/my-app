import cssStyle from './Users.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom';


let User = (props) => {
    const user = props.user
    return <div>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'}
                        className={cssStyle.photo} />
                </NavLink>
            </div>
            <div>
                {user.followed ?
                    <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                        props.unFollowThunkCreator(user.id)
                    }} >Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                        props.followThunkCreator(user.id)
                    }}>Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status} </div>
            </span>
            <span>
                <div>{'u.location.country'} </div>
                <div>{'u.location.city'} </div>
            </span>
        </span>
    </div>
}


export default User