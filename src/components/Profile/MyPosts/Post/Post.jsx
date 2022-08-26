import cssStyle from './Post.module.css'

const Post = (props) => {
    return <div className={cssStyle.content}>
        <div className={cssStyle.item}>
            <div className={cssStyle.messageImg}>
                <img src="https://www.blexar.com/avatar.png" alt="ava"/>
            </div>
            <div className={cssStyle.messageText}>
                {props.message}
            </div>
            <div className={cssStyle.messageAuthor}>
                {props.author}
            </div>
            <div className={cssStyle.messageLikes}>
                Likes {props.like}
            </div>
        </div>
    </div>
}

export default Post;