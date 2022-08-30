import { useState } from 'react';
import Loader from '../../Loader/Loader';
import ProfileDataEditForm from './ProfileDataEditForm';
import cssStyle from './ProfileInfo.module.css'
// import ProfileStatus from './ProfileStatus';
import ProfileStatusHook from './ProfileStatusHook';

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)
    
    if (!props.profile) {
        return <Loader />
    }


    const takePhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const isOwner = props.profile.userId == props.authId
    return <div className={cssStyle.content}>
        <div className={cssStyle.messageImg}>
            <img src="https://st2.depositphotos.com/1184927/6310/i/600/depositphotos_63105155-stock-photo-purple-starry-background-for-facebook.jpg" alt="fone" />
        </div>
        <div className={cssStyle.textStyle}>
            <div className={cssStyle.profileName} >
                {props.profile.fullName}
            </div>
            <div>
                <ProfileStatusHook
                    status={props.status}
                    updateStatus={props.updateStatus}
                    profile={props.profile}
                    authId={props.authId} />
            </div>
            <div>
                <img src={props.profile.photos.large || 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'}
                    className={cssStyle.photo}
                    alt='pofile page' />
            </div>
            <div>
                {(isOwner) && <input type={'file'} onChange={takePhoto} />}
            </div>
            <div className={cssStyle.errorTetx}>
                {(isOwner && props.error) ? <div>{props.error}</div> : <div></div>}
            </div>
            { editMode 
            ?<ProfileDataEditForm isOwner={props.isOwner} takePhoto={props.takePhoto} profile={props.profile} setEditMode={setEditMode} updateDataProfile={props.updateDataProfile}/>
            :<ProfileData isOwner={props.isOwner} takePhoto={props.takePhoto} profile={props.profile} setEditMode={setEditMode}/>}
        </div>
    </div>
}

export const Contacts = (props) => {
    return <div className={cssStyle.listContacts}><b>{props.contactTitle}:</b>{props.contactValue}</div>
}

const ProfileData = (props) => {
    return <div>
        <button onClick={()=>{props.setEditMode(true)}}>Edit</button>
        <div>
            <b>About me: </b>{props.profile.aboutMe}
        </div>
        <div>
            <b>Open to work: </b>{props.profile.lookingForAJob ? "Yes" : "No"}
        </div>
        {props.profile.lookingForAJob && <div>
            <b>My skils: </b>{props.profile.lookingForAJobDescription}
        </div>}
        <div  >
            <b>My contacts:</b>{Object.keys(props.profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
            })
            }
        </div>
    </div>
}

export default ProfileInfo;