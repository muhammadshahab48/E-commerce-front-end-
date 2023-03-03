import React, { Fragment } from 'react';
import {
    MDBBtn
} from "mdb-react-ui-kit";
import { useDispatch } from 'react-redux';
import { logOutUser } from '../redux/store/actions/auth-actions/auth-actions';


const Home = () => {

    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(logOutUser());
    }

    return (
        <Fragment>
            <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-between", margin: "10px" }}>
                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Welcome to Home</h5>

                <MDBBtn
                    className="mb-4 px-5" color='dark' size='lg'
                    style={{ backgroundColor: "#2ea3e5" }}
                    onClick={logOut}
                >
                    Log Out
                </MDBBtn>
            </div>
        </Fragment>
    )
}

export default Home;