import React from 'react'
// import DardRed from '../PhotosforWeb/DardRed.jpg'
import ME from '../PhotosforWeb/ME.jpeg'

const People = () => {
    return (
        <div className='mt-5 divlinear' style={{ marginLeft: '238px' }}>
            <div className="mt-5 p-3 text-center">
                <h1>People</h1>
            </div>
            {/* First Image */}
            <div className="card bg-dark text-light p-3 m-3"  style={{float:"left" ,width: "21rem"}}>
                <img src={ME} alt="Nothing" className="card-img-top" style={{height:"20rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">New Post</h5>
                    <p className="card-text">This is new post comment or like and also share it on your timeline</p>
                    <button className="btn btn-outline-primary">Comment</button>
                </div>
            </div>

            {/* Second Image */}
            <div className="card bg-dark text-light p-3 m-3"  style={{float:"left" ,width: "21rem"}}>
                <img src={ME} alt="Nothing" className="card-img-top" style={{height:"20rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">New Post</h5>
                    <p className="card-text">This is new post comment or like and also share it on your timeline</p>
                    <button className="btn btn-outline-primary">Comment</button>
                </div>
            </div>

            {/* Third Image */}
            <div className="card bg-dark text-light p-3 m-3"  style={{float:"left" ,width: "21rem"}}>
                <img src={ME} alt="Nothing" className="card-img-top" style={{height:"20rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">New Post</h5>
                    <p className="card-text">This is new post comment or like and also share it on your timeline</p>
                    <button className="btn btn-outline-primary">Comment</button>
                </div>
            </div>

            {/* fourth Image */}
            <div className="card bg-dark text-light p-3 m-3"  style={{float:"left" ,width: "21rem"}}>
                <img src={ME} alt="Nothing" className="card-img-top" style={{height:"20rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">New Post</h5>
                    <p className="card-text">This is new post comment or like and also share it on your timeline</p>
                    <button className="btn btn-outline-primary">Comment</button>
                </div>
            </div>

            {/* fourth Image */}
            <div className="card bg-dark text-light p-3 m-3"  style={{float:"left" ,width: "21rem"}}>
                <img src={ME} alt="Nothing" className="card-img-top" style={{height:"20rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">New Post</h5>
                    <p className="card-text">This is new post comment or like and also share it on your timeline</p>
                    <button className="btn btn-outline-primary">Comment</button>
                </div>
            </div>

            {/* Sixth Image */}
            <div className="card bg-dark text-light p-3 m-3"  style={{float:"left" ,width: "21rem"}}>
                <img src={ME} alt="Nothing" className="card-img-top" style={{height:"20rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">New Post</h5>
                    <p className="card-text">This is new post comment or like and also share it on your timeline</p>
                    <button className="btn btn-outline-primary">Comment</button>
                </div>
            </div>



        </div>
    )
}

export default People
