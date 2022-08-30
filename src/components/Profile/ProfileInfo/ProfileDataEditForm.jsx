import { Field, Formik } from 'formik'
import * as yup from 'yup'


const ProfileDataEditForm = (props) => {

    const validationSchema = yup.object().shape({
        FullName: yup.string().required("Обязательное поле"),
        AboutMe: yup.string().required("Обязательное поле"),
        lookingForAJobDescription: yup.string().required("Обязательное поле"),
        // "contacts.Facebook": yup.string().url()
    })

    let lookingForAJobDescription = props.profile.lookingForAJobDescription || "My skils"
    let aboutMe = props.profile.aboutMe || "About me"
    return <div>
        <Formik
            initialValues={{
                FullName: props.profile.fullName,
                AboutMe: aboutMe,
                lookingForAJob: props.profile.lookingForAJob,
                lookingForAJobDescription: lookingForAJobDescription,
                contacts: props.profile.contacts
                // github: props.profile.contacts.github,
                // vk: props.profile.contacts.vk,
                // facebook: props.profile.contacts.facebook,
                // instagram: props.profile.contacts.instagram,
                // twitter: props.profile.contacts.twitter,
                // website: props.profile.contacts.website,
                // youtube: props.profile.contacts.youtube,
                // mainLink: props.profile.contacts.mainLink,

            }}
            validateOnBlur
            onSubmit={(values => {
                props.updateDataProfile(values).then(
                    ()=>{
                        props.setEditMode(false)
                    }
                )
            })}
            validationSchema={validationSchema}
        >
            {({ values, errors, handleChange, handleBlur, isValid, handleSubmit }) => (
                <div>
                    <button
                        onClick={handleSubmit}
                        type='submit'
                    >save</button>
                    <div>
                        <b>Open to work: </b>
                        <Field
                            type={"checkbox"}
                            name={'lookingForAJob'}
                            component={'input'}
                        />
                    </div>
                    <div>
                        <b>About me: </b>
                        <input
                            type={"text"}
                            name={"AboutMe"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.AboutMe}
                        />
                    </div>
                    {errors.AboutMe && <p>{errors.AboutMe}</p>}
                    <div>
                        <b>Full name: </b>
                        <input
                            type={"text"}
                            name={"FullName"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.FullName}
                        />
                    </div>
                    {errors.FullName && <p>{errors.FullName}</p>}
                    <div>
                        <b>My skils: </b>
                        <input
                            type={"text"}
                            name={"lookingForAJobDescription"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lookingForAJobDescription}
                        />
                    </div>
                    {errors.lookingForAJobDescription && <p>{errors.lookingForAJobDescription}</p>}
                    <div  >
                        <b>My contacts:</b>
                    </div>
                    <div>
                        <b>Facebook: </b>
                        <input
                            type={"text"}
                            name={"contacts.facebook"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.contacts.facebook}
                        />
                    </div>
                    <div>
                        <b>Website: </b>
                        <input
                            type={"text"}
                            name={"contacts.website"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.contacts.website}
                        />
                    </div>
                    {/* {errors.contacts && <p>{errors.contacts}</p>} */}
                    <div>
                        <b>Vk: </b>
                        <input
                            type={"text"}
                            name={"contacts.vk"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.contacts.vk}
                        />
                    </div>
                    <div>
                        <b>Twitter: </b>
                        <input
                            type={"text"}
                            name={"contacts.twitter"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.contacts.twitter}
                        />
                    </div>
                    <div>
                        <b>Instagram: </b>
                        <input
                            type={"text"}
                            name={"contacts.instagram"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.contacts.instagram}
                        />
                    </div>
                    <div>
                        <b>Youtube: </b>
                        <input
                            type={"text"}
                            name={"contacts.youtube"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.contacts.youtube}
                        />
                    </div>
                    <div>
                        <b>Github: </b>
                        <input
                            type={"text"}
                            name={"contacts.github"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.contacts.github}
                        />
                    </div>
                    <div>
                        <b>MainLink: </b>
                        <input
                            type={"text"}
                            name={"contacts.mainLink"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.contacts.mainLink}
                        />
                    </div>
                </div>
            )}
        </Formik>

    </div>
}

export default ProfileDataEditForm;