import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import { UserDetailsApi } from "../services/Api"

export default function DashboardPage()
{
    const[user,setUser] = useState({name:"",email:"",localId:""})
    useEffect(()=>{
      UserDetailsApi().then((response)=>{
          
          setUser({
            name:response.data.users[0].displayName,
            email:response.data.users[0].email,
            localId:response.data.users[0].localId,
          
        })
      })
    },[])
    
    return(
      <div>
          <NavBar/>
        <main role="main" className="container mt-5">
            <div className="container">
              <div className="text-center mt-5">
                <h3>Dashboard page</h3>
                { user.name && user.email && user.localId ?
                (<div>
                <p className="text-bold " >Hi {user.name} your Firebase ID is {user.localId}</p>
                <p>Your email is {user.email}</p>
                </div>):<p>Loading...</p>
                } 
              </div>
            </div>
        </main>
      </div>
     
    )
}