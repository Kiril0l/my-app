import cssStyle from './TopFriends.module.css'

const TopFriend = (props) => {

    let topFriendsElement = props.state.topFriends.map(
        f => <TopF name={f.name} image={f.image} /> );

    return (
        <div className={cssStyle.item}>
            {topFriendsElement}
        </div>
    )
}

const TopF = (props) => {
    return (
        <div>
            <div >
                <img className={cssStyle.im} src={props.image} alt="img" />
            </div>
            <div>
                {props.name}
            </div>
        </div>
    )
}
export default TopFriend;