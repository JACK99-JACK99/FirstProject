import React, { useState, useEffect } from 'react';
import '../App.css'
import DardRed from '../PhotosforWeb/DardRed.jpg'


const HomePage = () => {
    const [comment, setComment] = useState('')

    function handleComment(e) {
        e.preventDefault();
        setComment(e.target.value)
    }

    function handleCommentClick(e) {
        e.preventDefault();
        alert('Your Comment is Commented : ')
        setComment('')
    }


    return (
        <>
            <div className='mt-5' style={{ marginLeft: '238px' }}>
                {/* First Image */}
                <div className=" card text-light p-3 m-3" style={{ float: "left", width: "20rem" }}>
                    <img src={DardRed} alt="Nothing" className="card-img-top DardRed" style={{ height: "20rem" }} />
                    <div className="card-body">
                        <h5 className="card-title">New Post</h5>
                        <p className="card-text">This is new post comment or like and also share it on your timeline</p>
                        <button
                            className="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            Comment
                        </button>
                    </div>
                </div>

                {/* Second Image */}
                <div className="card text-light p-3 m-3" style={{ float: "left", width: "20rem" }}>
                    <img src={DardRed} alt="Nothing" className="card-img-top DardRed" style={{ height: "20rem" }} />
                    <div className="card-body">
                        <h5 className="card-title">New Post</h5>
                        <p className="card-text">This is new post comment or like and also share it on your timeline</p>
                        <button
                            className="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            Comment
                        </button>
                    </div>
                </div>

                {/* Third Image */}
                <div className="card  text-light p-3 m-3" style={{ float: "left", width: "20rem" }}>
                    <img src={DardRed} alt="Nothing" className="card-img-top DardRed" style={{ height: "20rem" }} />
                    <div className="card-body">
                        <h5 className="card-title">New Post</h5>
                        <p className="card-text">This is new post comment or like and also share it on your timeline</p>
                        <button
                            className="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            Comment
                        </button>
                    </div>
                </div>

                {/* fourth Image */}
                <div className="card  text-light p-3 m-3" style={{ float: "left", width: "20rem" }}>
                    <img src={DardRed} alt="Nothing" className="card-img-top DardRed" style={{ height: "20rem" }} />
                    <div className="card-body">
                        <h5 className="card-title">New Post</h5>
                        <p className="card-text">This is new post comment or like and also share it on your timeline</p>
                        <button
                            className="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            Comment
                        </button>
                    </div>
                </div>

                {/* fourth Image */}
                <div className="card  text-light p-3 m-3" style={{ float: "left", width: "20rem" }}>
                    <img src={DardRed} alt="Nothing" className="card-img-top DardRed" style={{ height: "20rem" }} />
                    <div className="card-body">
                        <h5 className="card-title">New Post</h5>
                        <p className="card-text">Hello This is new post comment or like and also share it on your timeline</p>
                        <button
                            className="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            Comment
                        </button>
                    </div>
                </div>

                {/* Sixth Image */}
                <div className="card  text-light p-3 m-3" style={{ float: "left", width: "20rem" }}>
                    <img src={DardRed} alt="Nothing" className="card-img-top DardRed" style={{ height: "20rem" }} />
                    <div className="card-body">
                        <h5 className="card-title">New Post</h5>
                        <p className="card-text">This is new post comment or like and also share it on your timeline</p>
                        <button
                            className="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            Comment
                        </button>
                    </div>
                </div>
            </div>

            <div className="modal mt-5" tabIndex={-1} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Comment</h4>
                            <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" className="form">
                                <label htmlFor="comment" className="form-label">Enter your comment</label>
                                <textarea name="comment" onChange={handleComment}
                                    value={comment} id="comment"
                                    cols="" rows="" className="form-control"></textarea>
                            </form>
                            <div className="p-2">
                                <button className="btn btn-success mt-3" onClick={handleCommentClick} aria-label='Save'>Save Changes</button>
                                <button className="btn btn-danger float-end mt-3" data-bs-dismiss='modal' aria-label='Close'>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage;