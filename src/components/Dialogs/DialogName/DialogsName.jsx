import cssStyle from '../Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const DialogName = (props) => {
    return (
        <div>
            <NavLink to={"/dialogs/" + props.id} className={cssStyle.navlinkname}>{props.name}</NavLink>
        </div>
    )
}

export default DialogName;