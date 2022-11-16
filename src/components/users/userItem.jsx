export const UserItem = ({user: {login, avatar_url}}) => {
    return(
        <div className="user">
            <div className="user__profile">
                <img src={avatar_url} alt="" className="user__profile--img" />
            </div>
            <h2 className="user__title">{login}</h2>
        </div>
    )
}