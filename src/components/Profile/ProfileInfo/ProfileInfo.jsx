import Loader from '../../Loader/Loader';
import cssStyle from './ProfileInfo.module.css'
// import ProfileStatus from './ProfileStatus';
import ProfileStatusHook from './ProfileStatusHook';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loader />
    }

return <div className={cssStyle.content}>
    <div className={cssStyle.messageImg}>
        <img src="https://st2.depositphotos.com/1184927/6310/i/600/depositphotos_63105155-stock-photo-purple-starry-background-for-facebook.jpg" alt="fone" />
    </div>
    <div>
        <img src={props.profile.photos.large?props.profile.photos.large:'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'} 
        className={cssStyle.photo}
        alt='pofile page' />
    </div>
    <div className={cssStyle.textStyle}>
        <p>
            {props.profile.fullName}
        </p>
        <p>
            <ProfileStatusHook status = {props.status} updateStatus={props.updateStatus} profile={props.profile} authId={props.authId}/>
        </p>
    </div>
</div>
}

export default ProfileInfo;