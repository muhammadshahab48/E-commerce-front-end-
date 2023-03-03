import React, { useState } from 'react';
import logInImg from '../images/Signup.jpg.jpg'
import webLogo from '../images/my-website-only-logo.png'

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
}
  from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { logInUser } from '../redux/store/actions/auth-actions/auth-actions';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // Handling redux here 
  const dispatch = useDispatch()

  // Function to submit form
  const loginHandler = () => {

    let formData = {
      email,
      password
    };

    formData && dispatch(logInUser(formData));
  }

  return (
    <div>
      {/* <h1> LOG IN PAGE</h1> */}
      <MDBContainer className="my-5" >

        <MDBCard style={{ borderRadius: '25px', boxShadow: '2px 3px 9px #2ea3e5' }}>
          <MDBRow className='g-0'>

            <MDBCol md='6'>
              <MDBCardImage src={logInImg} alt="login form" className='rounded-start w-100' />
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardBody className='d-flex flex-column'>

                <div className='d-flex flex-row mt-2'>
                  <MDBCardImage src={webLogo} alt="Logo" className='rounded-start w-20' style={{ width: "50px", margin: "10px" }} />
                  {/* <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} /> */}
                  <span className="h1 fw-bold mb-0 " style={{ alignItems: "center" }}>SIGN IN </span>
                </div>

                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4'
                  label='Email address'
                  className='formControlLg' type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  size="lg" />
                <MDBInput wrapperClass='mb-4'
                  label='Password'
                  className='formControlLg' type='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  size="lg" />

                <MDBBtn
                  className="mb-4 px-5" color='dark' size='lg'
                  style={{ backgroundColor: "#2ea3e5" }}
                  onClick={loginHandler}
                >Login</MDBBtn>
                <a className="small text-muted" href="#!">Forgot password?</a>
                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="/Signup" style={{ color: '#393f81' }}>Register here</a></p>

                <div className='d-flex flex-row justify-content-start'>
                  <a href="#!" className="small text-muted me-1">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </div>

              </MDBCardBody>
            </MDBCol>

          </MDBRow>
        </MDBCard>

      </MDBContainer>
    </div>
  )
}

export default Login;

