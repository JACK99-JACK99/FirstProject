import React from "react"

const Details = () => {
    return (
        <div className="mt-5 divlinear" style={{ marginLeft: "230px" }}>
            <div className="mt-5 p-3 text-center">
                <h1>Details</h1>
            </div>

            <div className="bg-dark text-light p-3 m-3" style={{ float: "left", width: "21rem" }}>
                <button
                    className="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    Comment
                </button>
            </div> 

            <div className="modal" tabIndex={-1} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">example of modal</h4>
                            <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" className="form">
                                <label htmlFor="comment" className="form-label">Enter your comment</label>
                                <textarea name="comment" id="comment" cols="30" rows="10" className="form-control"></textarea>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Details
