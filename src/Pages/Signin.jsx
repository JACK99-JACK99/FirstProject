import React from 'react'

const Signin = () => {
    return (
        <div className='mt-5' style={{ marginLeft: '230px' }}>
            <div className="mt-5 p-3 text-center">
                <h1><u><b><i>Signin</i></b></u></h1>
            </div>
            <div className='border border-primary w-50  mt-5 p-4' style={{marginLeft:"300px"}}>
            <form action="">
                <div className='form-floating'>
                    <input id='label1' type="text" className="form-control" placeholder="name@example.com"/><br />
                    <label htmlFor="label1">Enter Id</label>
                </div>

                <div className='form-floating'>
                    <input id='label2' type="password" className="form-control" placeholder="Enter your password"/><hr />
                    <label htmlFor="label2">Password</label>

                    {/* <button className="btn btn-outline-info w-50">Log-in</button> */}
                    <button className="btn btn-outline-primary w-100 h-25">Sign-up</button>
                </div>
            </form>
            </div>

        </div>
    )
}

export default Signin;