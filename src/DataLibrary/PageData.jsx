import React from 'react';
import HomePage from '../Pages/HomePage'
import About from '../Pages/About';
import Production from '../Pages/Production';
import Formalities from '../Pages/Formalities';
import Signin from '../Pages/Signin';
import People from '../Pages/People';
import Details from '../Pages/Details';
import Loginpage from '../Pages/LOGIN';
import MainPage from '../PortfolioPages/MainPage';

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: <HomePage />,
        // main: () => <h2>Home</h2>
    },
    {
        path: "/About",
        sidebar: <About />,
        // main: () => <h2>Bubblegum</h2>
    },
    {
        path: "/Details",
        sidebar: <Details />,
        // main: () => <h2>Shoelaces</h2>
    },
    {
        path: "/People",
        sidebar: <People />
    },
    {
        path: "/Production",
        sidebar: <Production />
    },
    // {
    //     path: "/Sign-in",
    //     sidebar: <Signin />
    // },
    {
        path: '/Formalities',
        sidebar: <Formalities />
    },
    {
        path: '/Sign-in',
        sidebar: <Loginpage />
    },
    {
        path: 'Mainpage',
        sidebar: < MainPage />
    }
];

export default routes;