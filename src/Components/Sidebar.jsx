import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
//  import { withRouter } from 'react-router-dom';

class Sidebar extends Component {
    render() {
       
        return (
            <div className="sidebar mt-5" id="sidebar" style={{ float: 'left' }}>
                <div className="mt-5">
                    <ul className='sideUl'>
                        <li><Link className='sideA' to="/">Home</Link></li><hr />
                        <li><Link className='sideA' to="/About">About</Link></li><hr />
                        <li><Link className='sideA' to="/People">People</Link></li><hr />
                        <li><Link className='sideA' to="/Details">Details</Link></li><hr />
                        <li><Link className='sideA' to="/Production">Production</Link></li><hr />
                        <li><Link className='sideA' to="/Formalities">Formalities</Link></li><hr />
                        <li><Link className='sideA' to="/Sign-in">Sign-in</Link></li>
                        <li><Link className="sideA" to='/Mainpage'>MainPage</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
