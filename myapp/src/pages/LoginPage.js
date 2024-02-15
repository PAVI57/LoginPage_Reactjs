import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { LoginApi } from '../services/Api';
import { isAuthenticated } from '../services/Auth';
import { storeUserData } from '../services/Storage';
import './LoginPage.css';
export default function LoginPage()
{
    const initialStateErrors = {
        email:{required:false},
        password:{required:false},
        name:{required:false},
        custom_error:null
    };

    const [errors,setErrors] = useState(initialStateErrors);
    const [loading,setLoading] = useState(false);
    const [inputs,setInputs] = useState({
        email:"",
        password:"",
      })

       const handleInput = (event)=>{
        setInputs({...inputs,[event.target.name]:event.target.value})
     }

    const handleSubmit =async (event)=>{
        event.preventDefault();
        let errors=initialStateErrors;
        let hasError=false;
        if(inputs.email==="")
        {
          errors.email.required=true;
          hasError=true;
        }
        if(inputs.password==="")
        {
          errors.password.required=true;
          hasError=true;
        }
 
        if(hasError!==true)
        {
          setLoading(true)
          //console.log(inputs);
          await LoginApi(inputs).then((response)=>{
            console.log(response);
          storeUserData(response.data.idToken);
          }).catch((err)=>{

           
              alert("Account not found!Please Register")
            
          //   //alert("befyieyfgegfuefieifeifjiefiefi")
          //  alert("error in front end ");
          //  console.log(err);
          //       setErrors({...errors, custom_error: "Invalid Credentials."})
            
          }).finally(()=>{
          setLoading(false)
          })
        }
        setErrors({...errors});
  }
  //console.log("kavin prasasasuhuh"+isAuthenticated());
    if(isAuthenticated())
    {
     
         return <Navigate to="/dashboard"/>
    }
    
    return(

        <section className="login-block">
            <div className="container">
                <div className="row ">
                    <div className="col login-sec">
                        <h2 className="text-center">Login Now</h2>
                        <form onSubmit={handleSubmit} className="login-htmlForm" action="">
                        <div className="htmlForm-group">
                            <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label><br></br>
                            <input type="email"  className="htmlForm-control" onChange={handleInput} name="email"  id="" placeholder="email" / >
                            { errors.email.required?
                        (<span className="text-danger" >
                            Email is required.
                        </span>):null }
                        </div>
                        <div className="htmlForm-group">
                            <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label><br></br>
                            <input  className="htmlForm-control" type="password" onChange={handleInput} name="password" placeholder="password" id="" />
                            { errors.password.required?
                        (<span className="text-danger" >
                            Password is required.
                        </span>):null }
                        </div>
                        <div className="htmlForm-group">
                        {loading ?
                        (<div  className="text-center">
                          <div className="spinner-border text-primary " role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>):null
                        }
                            <span className="text-danger" >
                            { errors.custom_error?
                          (<p>{errors.custom_error}</p>):null}
                            </span>
                          <br></br> <input  type="submit" className="btn btn-login float-right" disabled={loading} value="Login"/>
                        </div>
                        <div className="clearfix"></div>
                        <div className="htmlForm-group">
                        Create new account ? Please <Link to="/register" >Register</Link>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}