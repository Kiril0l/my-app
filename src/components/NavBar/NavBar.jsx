import { NavLink } from 'react-router-dom';
import cssStyle from './NavBar.module.css';
import TopFriend from "./TopFriends/TopFriends";


const Nav = (props) => {
    return <nav className={cssStyle.nav}>
        <div >
            <NavLink to="/profile" className={navData => navData.isActive ? cssStyle.activeLink : cssStyle.item}>
                Profile
            </NavLink>
        </div>
        <div >
            <NavLink to="/dialogs" className={navData => navData.isActive ? cssStyle.activeLink : cssStyle.item}>
                Message
            </NavLink>
        </div>
        <div >
            <NavLink to="/users" className={navData => navData.isActive ? cssStyle.activeLink : cssStyle.item}>
                Users
            </NavLink>
        </div>
        <div>
            <NavLink to="/news" className={navData => navData.isActive ? cssStyle.activeLink : cssStyle.item}>
                News
            </NavLink>
        </div>
        <div>
            <NavLink to="/music" className={navData => navData.isActive ? cssStyle.activeLink : cssStyle.item}>
                Music
            </NavLink>
        </div>
        <div>
            <NavLink to="/settings" className={navData => navData.isActive ? cssStyle.activeLink : cssStyle.item}>
                Settings
            </NavLink>
        </div>
        <div>
            <h1>
                Top Friends
            </h1>
            <div>
                <TopFriend state={props.state}/>
            </div>
        </div>
    </nav>
}

export default Nav;