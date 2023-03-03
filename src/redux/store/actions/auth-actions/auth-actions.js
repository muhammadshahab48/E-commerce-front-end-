import axios from "axios";
import { LOGIN_USER, LOGOUT_USER } from "../../action-types/action-types";



// All auth actions funstions are defiend here


// Function to sign up user
const signUpUser = (userData) => {
    return async (dispatch) => {
        console.log("User:" , userData);

        // let apiUrl = "http://192.168.1.190:3005/api/add-user";
        let apiUrl = "http://192.168.4.242:3005/api/add-user";
        
        try {
            let response = await axios({
              method: "POST",
              url: apiUrl,
              data: userData
            })
            console.log(response);
    
            if (response.status === 200) {
              alert(response.data.message)
            }
    
          }
    
          catch (error) {
            console.log("Something went wrong while posting form Data...!", error)
            if (error.response.status === 400) {
              alert(error.response.data.message);
            }
            else if (error.response.status === 404) {
              alert(error.response.data.message);
            }
          }
    };
};

// Function to log in user
const logInUser = (userData) => {
    return async (dispatch) => {
        console.log("User:" , userData);

        // let apiUrl = "http://192.168.1.190:3005/api/login-user";
        let apiUrl = "http://192.168.4.242:3005/api/login-user";
        
        try {
            let response = await axios({
              method: "POST",
              url: apiUrl,
              data: userData
            })
            console.log(response);
    
            if (response.status === 200) {
            //   setName("");
            //   setEmail("");
            //   setPassword("");
            //   setConfirmPassword('');
              alert(response.data.message)

              dispatch({
                type: LOGIN_USER,
                payload: response.data.data
              })
            }
    
          }
    
          catch (error) {
            console.log("Something went wrong while posting form Data...!", error)
            if (error.response.status === 400) {
              alert(error.response.data.message);
            }
            // else if (error.response.status === 404) {
            //   alert(error.response.data.message);
            // }
          }
    };
};

// Function to log out user
const logOutUser = () => {
  return (dispatch) => {
      dispatch({
        type: LOGOUT_USER
      })
      alert("You have logged out succesfully")
  }
}

export {
    signUpUser,
    logInUser,
    logOutUser
}