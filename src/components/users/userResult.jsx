import { UserItem } from "./usersItem";
import { useEffect, useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

export const UserResults = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        fetchUser()
    },[])

    const fetchUser =  async () => {

        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })

        const data = await response.json()
        setUsers(data)
        setLoading(false)

        console.log(data)
    }

    if(!loading) {
        return (
            <div className="users">
                {users.map((user) =>{
                    return(
                        <div className="users__container">
                            <h3>{user.login}</h3>  
                            <UserItem key={user.id} user={user}/>
                        </div>

                    )
                })}
            </div>
        )
    }else {
        return(
            <div className="spinner">                
                <PropagateLoader
                color="#efefef"
                loading               
                speedMultiplier={0}
                />
            </div>
        )
    }
    
}