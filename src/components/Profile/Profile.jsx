import cssStyle from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
    return <div className={cssStyle.content}>
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} authId={props.authId}/>
            <MyPostsContainer 
            // store={props.store} 
            />
        </div>
    </div>
}



export default Profile;