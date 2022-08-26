import { Field, Formik } from 'formik'
import { connect } from 'react-redux'
import * as yup from 'yup'
import { logInThunkCreator } from '../../redux/authReducer'
import { Navigate } from "react-router-dom"
import cssStyle from "./../Header/Header.module.css"



const Login = (props) => {

    if (props.isAuth === true) {
        return <Navigate replace to={"/profile"} />
    }

    const validationShema = yup.object().shape({
        email: yup.string().typeError('Должно быть строкой').required("обязательное поле"),
        password: yup.string().typeError('Должно быть строкой').required("обязательное поле")
    })

    return <Formik
        initialValues={{
            email: '',
            password: '',
            remembrMe: false
        }}
        validateOnBlur
        onSubmit={(values, onSubmitProps) => {
            props.logInThunkCreator(values.email, values.password,
                values.remembrMe, onSubmitProps.setStatus, onSubmitProps.setSubmitting)
            onSubmitProps.setSubmitting(true)
        }}
        validationSchema={validationShema}
    >
        {({ values, errors, touched, handleBlur, handleChange, status, handleSubmit, isSubmitting }) => (
            <div>
                <h1>
                    Login
                </h1>
                <div className={cssStyle.errorText}>
                    {status && <div>
                        <p>{status[0]}</p>
                        <p>{status[1]}</p>
                    </div>}
                </div>
                <p>
                    <Field
                        placeholder={'Email'}
                        type={"text"}
                        name={'email'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                </p>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <p>
                    <Field
                        placeholder={'Password'}
                        type={"password"}
                        name={'password'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                </p>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <p>
                    <label htmlFor={"remembrMe"}>Remember me</label>
                    <Field
                        type={"checkbox"}
                        name={'remembrMe'}
                        component={'input'}
                    />
                </p>
                <button
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    type={'submit'}
                >Log in</button>
            </div>
        )}

    </Formik>

}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { logInThunkCreator })(Login)



