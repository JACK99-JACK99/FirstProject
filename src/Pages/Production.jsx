import React from 'react'

const Production = () => {
    return (
        <div className='mt-5 divlinear' style={{ marginLeft: '230px' }}>

            <div className="card bg-light text-dark  p-3 marginH border border-warning border-4" style={{ float: "left", width: "60rem" }}>
                <iframe
                    width="400" height="355"
                    className='card-img-top'
                    src="https://www.youtube.com/embed/uXNOVHhOCCA">
                </iframe>
                {/* <img src={ME} alt="Nothing" className="card-img-top DardRed" style={{ height: "20rem" }} /> */}
                <div className="card-body">
                    <h5 className="card-title">New Post</h5>
                    <p className="card-text">This is new post comment or like and also share it on your timeline</p>
                    <button className="btn btn-outline-dark w-25 h-25 me-5">Like</button>
                    <button className="btn btn-outline-dark w-25 me-5">Comment</button>
                    <button className="btn btn-outline-dark w-25 me-5">Share us</button>
                </div>
            </div>


        </div>
    )
}

export default Production
