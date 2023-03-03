import React, { useState } from 'react';
import NavLink from 'react-bootstrap/esm/NavLink';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../redux/store/actions/auth-actions/auth-actions';
import profile from "../images/profile.png"

const Signup = () => {

  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState(profile);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")

  // Handling redux here 
  const dispatch = useDispatch()

  const imageOnChange = (e) => {
    let fileData = e.target.files[0]
    
    if (fileData) {
      let newUrl = URL.createObjectURL(fileData);
      console.log("URL" ,newUrl)
      setProfileImage(newUrl)
    }
  }

  // Function to submit form
  const SignupHandler = () => {

    let formData = {
      name,
      profileImage,
      email,
      password,
      confirmPassword,
      role: "admin"
    }

    formData && dispatch(signUpUser(formData));
  }

  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{ borderRadius: '25px', boxShadow: '2px 2px 9px #2ea3e5' }}>
        <MDBCardBody>
          <MDBRow style={{ justifyContent: "center" }}>

            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center justify-content-center'>

              <p className="text-center h1 fw-bold mb-1 mx-1 mx-md-1 mt-1">SIGN UP </p>

              <img 
                className='text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-2'
                src={profileImage ? profileImage : null}
                alt='' height={"100px"} width={"100px"}  
                style={{borderRadius:"50px"}}
                />

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg' />
                <MDBInput
                  label='Your Name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  id='form1'
                  type='text'
                  className='w-100' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg' />
                <MDBInput
                  label='Your Email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  id='form2'
                  type='email' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg' />
                <MDBInput
                  type="password"
                  id="form3Example4"
                  label='Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg' />
                <MDBInput
                  label='Confirm your password'
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  id='form4'
                  type='password' />
              </div>

              <p className="text-center h6 fw-bold mb-2 mx-1 mx-md-4 mt-1">Insert your Profile Image here. Size 1'' x 1''  </p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg' />
                <MDBInput
                  // value={profileImage}
                  onChange={imageOnChange}
                  id='form5'
                  type='file'
                  className='w-100'
                // accept=''
                />
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remeber my Password' />
              </div>

              <MDBBtn
                className='mb-4'
                size='lg'
                onClick={SignupHandler}
              // disabled={
              //   name.trim().length < 1 ||
              //   email.trim().length < 1 ||
              //   password.trim().length < 1}
              >
                Register
              </MDBBtn>

              <NavLink href='/'> Already has Registered ...! Sign in here </NavLink>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Signup;




