import './userResults.scss'
import { useEffect,  useContext } from "react"
import { UserItem } from "./userItem/userItem";
import { Dna } from 'react-loader-spinner';
import {GithubContext} from '../../context/github/githubContext';
// import { } from 'react';

export const UserResults = () => {
    const {users, loading, fetchUser} = useContext(GithubContext)

    useEffect(()=> {
        fetchUser()
    },[])


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