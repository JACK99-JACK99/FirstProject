import React from 'react';
import { useState } from 'react'

const Formalities = () => {
    const [firstName, setfirstName] = useState('')
    const [secondName, setsecondName] = useState('')
    const [lastName, setlastName] = useState('')
    const [fatherName, setfatherName] = useState('')
    const [motherName, setmotherName] = useState('')
    const [Qualification, setQualification] = useState('')
    const [qualificationStatus, setqualificationStatus] = useState('')
    const [percentage, setpercentage] = useState('')

    function HandleFisrtName(e) {
        e.preventDefault();
        setfirstName(e.target.value)
    }
    function HandleLastName(e) {
        e.preventDefault();
        setlastName(e.target.value)
    }
    function HandleSecondName(e) {
        e.preventDefault();
        setsecondName(e.target.value)
    }
    function HandleFatherName(e) {
        e.preventDefault();
        setfatherName(e.target.value)
    }
    function HandleMotherName(e) {
        e.preventDefault();
        setmotherName(e.target.value)
    }
    function HandleQualification(e) {
        e.preventDefault();
        setQualification(e.target.value)
    }
    function HandleQualificationStatus(e) {
        e.preventDefault();
        setqualificationStatus(e.target.value)
    }
    function HandlePercentage(e) {
        e.preventDefault();
        setpercentage(e.target.value)
    }
    return (
        <div className='mt-5 p-3' style={{ marginLeft: '230px' }}>
            <div className="mt-5 p-3 bg-success text-center">
                <h1>Formalities</h1>
            </div>
            <div className="mt-3 p-2 border border-danger">
                <form className="form" htmlFor='reset'>
                    <legend className='text-center text-uppercase text-primary'>for you</legend><hr />
                    <fieldset>
                        <div className="row">
                            <div className="col ps-3">
                                <label htmlFor="l1" className="form-label mb-1">first name(Required)</label>
                                <input type="text" id='l1'
                                    value={firstName}
                                    onChange={HandleFisrtName}
                                    className="form-control" required />
                            </div>
                            <div className="col">
                                <label htmlFor="l2" className="form-label mb-1">second name</label>
                                <input type="text" id='l1'
                                    value={secondName}
                                    onChange={HandleSecondName}
                                    className="form-control" />
                            </div>
                            <div className="col pe-3">
                                <label htmlFor="l3" className="form-label mb-1">last name</label>
                                <input type="text" id='l3'
                                    value={lastName}
                                    onChange={HandleLastName}
                                    className="form-control" />
                            </div>
                        </div>
                    </fieldset>
                    {/* <hr /> */}

                    <div className="row mt-2">
                        <div className="col-6">
                            <label htmlFor="l4" className='form-label'>Father's Name</label>
                            <input type="text" id='l4'
                                value={fatherName}
                                onChange={HandleFatherName}
                                className='form-control' />
                        </div>
                        <div className="col-6">
                            <label htmlFor="l5" className='form-label'>Mother's Name</label>
                            <input type="text" id='l5'
                                value={motherName}
                                onChange={HandleMotherName}
                                className='form-control' />
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-4">
                            <label htmlFor="l6" className='form-label mb-1'>Highest Qualification</label>
                            <select className='form-control' value={Qualification} onChange={HandleQualification}>
                                <option value="Post Graduation">Post Graduation</option>
                                <option value="Graduation">Graduation</option>
                                <option value="Higher Secondary">Higher Secondary</option>
                                <option value="High School">High School</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <label htmlFor="l7" className='form-label mb-1'>Passed/Appearing</label>
                            <select className='form-control' value={qualificationStatus} onChange={HandleQualificationStatus}>
                                <option value="Passed">Passed</option>
                                <option value="Appearing">Appearing</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <label htmlFor="l8" className='form-label mb-1'>Percentage</label>
                            <input type="text" id='l8'
                                value={percentage}
                                onChange={HandlePercentage}
                                className='form-control' />
                        </div> 
                        <br />
                    </div>
                    <div className="row mt-4">
                        <div className="col-4 form-cotrol">
                            <input type="file" />
                        </div>
                        
                    </div>
                    <div className="row mt-4">
                        <div className="col-2">
                            <input type="checkbox"  id='checkbox' className='checkbox me-2'/>
                            <label htmlFor="checkbox">I'm Agree.</label>
                        </div>
                        <div className="col-10">
                            <button type='Submit' className="btn btn-primary form-control text-dark">
                                Submit
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div >
    )
}
export default Formalities;