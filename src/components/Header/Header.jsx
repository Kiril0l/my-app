import { NavLink } from 'react-router-dom';
import cssStyle from './Header.module.css'

const Header = (props) => {
    return <header className={cssStyle.header}>
        <img src="https://www.go-platform.com/images/opportunities/opp_717.jpg" alt="logo"/>
        <div className={cssStyle.headerText}>
            {props.isAuth ? 
            <div> {props.login} - < button onClick = {props.logOutThunkCreator}>Logout</button> </div> 
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;