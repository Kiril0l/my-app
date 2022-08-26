import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const WithAuthContainer = (Component) => {
    let RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to={"/login"} />
        return <Component {...props} />
    }
    const RedirectComponentWithConnect = connect(mapStateToPropsForRedirect)(RedirectComponent)
    
    return RedirectComponentWithConnect
}