import React, { Component } from 'react';
import Swal from 'sweetalert2';

class Loginpage extends Component {
    constructor(...props) {
        super(...props)
        window.history.replaceState(null, null, "/login");
        this.state = {
            name:'',
            password: ''
        }
    }

    
    updatePassword = (e) => {
        e.preventDefault();
        const value = e.target.value;
        this.setState({ password: value });
    }
    onChangeEvent = (e) => {
        const value = e.target.value;
        console.log("click", value)
        this.setState({ type: value });
    }

    componentDidMount = () => {
        console.log("July 07 04:51");
    }

    loginClick = (e) => {
        e.preventDefault();
        console.log("version 2.0")
        if (this.state.type == 0) {
            Swal.fire(
                'Please select user type ',
                '',
                'error'
            )
            return
        }
    }
    render() {

        return (
            <div className='container border border-info w-50' style={{ justifyContent: 'center', marginTop: '150px' }}>
                {/* <Helmet>
                    <title>Login - Adhaan HRMS </title>
                    <meta name="description" content="Login page" />
                </Helmet> */}
                <h1 className='text-primary text-uppercase text-center mt-2'><u>Login-in</u></h1>
                <div className="account-content m-5">

                    <div className="container">
                        <div className="center_box">
                            <div className="center_box">
                                <div>{this.state.result}</div>
                                <div className="account-box">
                                    <div className="account-wrapper">
                                        <form action="">
                                            <div className="form-group">
                                                <label>Select Employee type</label>
                                                <select className="form-control" onChange={this.onChangeEvent}>
                                                    <option value='0'>Select Employee type</option>
                                                    <option>Payroll</option>
                                                    <option>Recruiter</option>
                                                    <option>Admin</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Please Enter Empolyee Id</label>
                                                <input className="form-control" type="text" placeholder="Enter Empolyee Id/Email Id/Mobile No" onChange={this.updateInput} />
                                                <label className="text-danger">{this.state.error}</label>
                                                <div className="form-group">
                                                    <label>Please Enter Password</label>
                                                    <input className="form-control" type="password" placeholder="Enter Your Password" onChange={this.updatePassword} />
                                                    <label className="text-danger">{this.state.error}</label>
                                                </div>
                                            </div>
                                            <div className="form-group text-center ">
                                                <button onClick={this.loginClick} className="btn btn-primary account-btn" >
                                                    Login</button>
                                            </div>
                                            <div className="account-footer">
                                                <a className="text" href="/blue/forgotpassword">
                                                    Forgot password?
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loginpage;
