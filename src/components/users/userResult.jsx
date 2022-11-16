import { useEffect, useState } from "react"

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
                {users.map((users) =>{
                    return(
                        <div className="users">
                            <h3>{users.login}</h3>  
                        </div>

                    )
                })}
            </div>
        )
    }else {
        return(
            <div className="spinning">
                <h3 className="loading">loading</h3>
            </div>
        )
    }
    
}