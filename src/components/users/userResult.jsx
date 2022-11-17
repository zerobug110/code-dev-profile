import './userResults.scss'
import { useEffect, useState } from "react"
import { UserItem } from "./userItem/userItem";
import { Dna } from 'react-loader-spinner'

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
                <div className="users__list">
                    {users.map((user) =>{
                        return(
                            <div className="users__list--item">
                                <UserItem key={user.id} user={user}/>
                            </div>

                        )
                    })}
                </div>
                
            </div>
        )
    }else {
        return(
            <div className="spinner">                
                <Dna
                    visible={true}
                    height="100"
                    width="100"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                    />
            </div>
        )
    }
    
}