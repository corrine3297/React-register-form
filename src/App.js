import { useState } from 'react';
import './App.css';

function App() {
  const [userDetails, setUserDetails] = useState({
    FirstName: "",
    LastName: "",
    EmailAddress: "",
    Password: ""
  })

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [EmailAddress, setEmailAddress] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailAddressValid, setIsEmailAddressValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

  const registerHandle = (e) => {
    console.log(e.target)
    e.preventDefault()
    if (!FirstName || !LastName || !EmailAddress || !Password || !ConfirmPassword) {
      alert("Please fill the form completely")
    }
    else {
      alert(`User details
        FirstName :${userDetails.FirstName}
        LastName :${userDetails.LastName}
        EmailAddress :${userDetails.EmailAddress}
        Password :${userDetails.Password}

      `)
    }
  }
  const validateInput = (e) => {
    const { value, name } = e.target;
    if (name === "FirstName") {
      if (!!value.match(/^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$/)) {
        setFirstName(value)
        setIsFirstNameValid(true)
        setUserDetails({ ...userDetails, [name]: value })
      }
      else {
        if (value === "") {
          setIsFirstNameValid(true)
        }
        else {
          setIsFirstNameValid(false)

        }
      }
    }
    else if (name === "LastName") {
      if (!!value.match(/^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$/)) {
        setLastName(value)
        setIsLastNameValid(true)
        setUserDetails({ ...userDetails, [name]: value })
      }
      else {
        if (value === "")
          setIsLastNameValid(true)
        else {
          setIsLastNameValid(false)
        }
      }
    }
    else if (name === "EmailAddress") {
      if (!!value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
        setEmailAddress(value)
        setIsEmailAddressValid(true)
        setUserDetails({ ...userDetails, [name]: value })
      }
      else {
        if (value === "")
          setIsEmailAddressValid(true)
        else {
          setIsEmailAddressValid(false)
        }
      }
    }
    else if (name === "Password") {
      if (!!value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/)) {
        setPassword(value)
        setIsPasswordValid(true)
        setUserDetails({ ...userDetails, [name]: value })
      }
      else {
        if (value === "")
          setIsPasswordValid(true)

        else {
          setPassword(value)
          setIsPasswordValid(false)
        }
      }
    }
    else {
      console.log(value,"value")
      console.log(Password,"password")
      if (value===Password) {
       
        setConfirmPassword(value)
        setUserDetails({ ...userDetails, [name]: value })
        setIsConfirmPasswordValid(true)
      }
      else {
        if (value === "")
          setIsConfirmPasswordValid(true)
        else {
          setIsConfirmPasswordValid(false)
        }
      }
    }
  }


  return (
    <>
      <div className="form-container">
        <form onSubmit={registerHandle}>
          <div className="row mb-4">
            <div className="col">
              <div className="form-floating">
                <input type="text" className="form-control" name="FirstName" id="firstName" placeholder="First Name" onChange={(e) => validateInput(e)}
                />
                <label for="firstName">First Name</label>
                {
                  !isFirstNameValid &&
                  <div className='text-danger'>Invalid first name</div>
                }
              </div>

            </div>
            <div className="col">
              <div className="form-floating">
                <input type="text" className="form-control" name="LastName" id="lastName" placeholder="Last Name" onChange={(e) => validateInput(e)} />
                <label for="lastName">Last Name</label>
                {
                  !isLastNameValid &&
                  <div className='text-danger'>Invalid last name</div>
                }
              </div>
            </div>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" name="EmailAddress" id="emailAddress" placeholder="Email Address"
              onChange={(e) => validateInput(e)} />
            <label for="emailAddress">Email Address</label>
            {
              !isEmailAddressValid &&
              <div className='mb-3 text-danger'>Invalid Email address</div>
            }
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" name="Password" id="password" placeholder="Password"
              onChange={(e) => validateInput(e)} />
            <label for="password">Password</label>
            {
              !isPasswordValid &&
              <div className='mb-3 text-danger'>Your password is not strong</div>
            }
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" name="ConfirmPassword" id="confirmpassword" placeholder="Password"
              onChange={(e) => validateInput(e)} />
            <label for="confirmpassword">Confirm Password</label>
            {
              !isConfirmPasswordValid &&
              <div className='mb-3 text-danger'>Password doesnot match</div>
            }
          </div>
          {/* <div className="d-flex text-center mb-3">
            <input type="checkbox" className="form-check-input me-2" id="checkbox" />Subscribe to our news

          </div> */}
          <div className="d-grid">
            <button type="submit" disabled={isFirstNameValid&&isLastNameValid&&isEmailAddressValid&&isPasswordValid&&isConfirmPasswordValid?false:true}className="btn btn-dark">Register</button>
          </div>
        </form>
        <div className="text-center mt-3">
          <p>Register with</p>
          <a href="#" className="btn btn-link text-dark"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="btn btn-link text-dark"><i className="fab fa-instagram"></i></a>
          <a href="#" className="btn btn-link text-dark"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="btn btn-link text-dark"><i className="fab fa-google"></i></a>
          <a href="#" className="btn btn-link text-dark"><i className="fab fa-skype"></i></a>

        </div>




      </div>
    </>
  );
}

export default App;
