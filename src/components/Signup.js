import React, {useState} from 'react';
import job1 from './img/job1.png';
import swal from 'sweetalert';
import { NavLink, useNavigate } from 'react-router-dom';





const Signup = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "", dob:"",email:"", password:""
  });
  
  let name, value;
  
  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
  
    setUser({...user, [name] : value});
  }

  const PostData =  async(e) => {
      e.preventDefault();

      const {name, dob, email,password} = user;

      const res = await fetch("/register", {
        method:"POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          name, 
          dob, 
          email, 
          password, 
          
        })
      });

      const data = res.json();

      if (res.status === 422 || !data) {
        swal({
          title: "ERROR!",
          text: "Please enter all details",
          icon: "warning",
          dangerMode: true,
        })
        console.log("Invalid Registration");

      }else{
        
        swal({
          icon: "success",
          text:"Registeration Successfull"
        });

        navigate(`/login`);
      }
  };
 

  return <>
  
  <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header mt-5">
        
        
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title" style={{color:"white"}}>
            <span>SIGN UP</span>
       
          </div>
          <div className="register-image">
            <figure>
                <img src={job1} alt="signup" />
            </figure>
            <NavLink to = "/login" style={{color:"white"}} className="signup-img-link">I am already Registered</NavLink>
        </div>
        
        </div>
        <div class="screen-body-item1">
        <form method="POST" className='register-form' id='register-form'>
          <div class="app-form" style={{color:"white"}}>
            <div class="app-form-group1">
                  <label htmlFor="name">
                      <i class="zmdi zmdi-account zmdi-hc-lg"></i>
                  </label>
              <input class="app-form-control" type="text" name="name" id="name" autoComplete="off" value={user.name} onChange={handleInputs} placeholder="Your Name" />
            </div>

            <div class="app-form-group1">
            <label htmlFor="dob">
                          <i class="zmdi zmdi-calendar material-icons-name"></i>
                          </label>
              <input class="app-form-control" placeholder="DOB" type="date" name="dob" id="dob" autoComplete="off" value={user.dob} onChange={handleInputs} />
            </div>
           
            <div class="app-form-group1">
            <label htmlFor="email">
                          <i class="zmdi zmdi-email material-icons-name"></i>
                          </label>
              <input class="app-form-control" type="text" name="email" id="email" autoComplete="off" value={user.email} onChange={handleInputs}
                          placeholder="email" />
            </div>
            
           
            
            <div class="app-form-group1">
            <label htmlFor="password">
                          <i class="zmdi zmdi-lock material-icons-name"></i>
                          </label>
              <input class="app-form-control" type="password" name="password" id="password" autoComplete="off" value={user.password} onChange={handleInputs}
                          placeholder="Your Password" />
            </div>
       
            <div class="app-form-group buttons">
              <input className="app-form-button" style={{color:"white"}} type="submit" name="signup" id="signup" value="Register" onClick={PostData}/>
              
            </div>
           
          </div>
          </form>
        </div>   
        
      </div>
    </div>
   
  </div>
</div>
  
  

</>

};

export default Signup;
