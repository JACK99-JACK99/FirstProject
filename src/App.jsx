import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import routes from './DataLibrary/PageData'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {
	return (
		<>
		<Header />
			<Router>
				<Sidebar />
				<Routes>
					{routes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
							element={route.sidebar}
						/>
					))}
				</Routes>

				{/* <div style={{ flex: 1, padding: "10px" }}>
						<Routes>
							{routes.map((route, index) => (
								// Render more <Route>s with the same paths as
								// above, but different components this time.
								<Route
									key={index}
									path={route.path}
									exact={route.exact}
									children={<route.main />}
								/>
							))}
						</Routes>
					</div> */}
				{/* </div> */}
			</Router>
			{/* <h1 className="">We are building youtube like application</h1> */}
		</>
	)
}

export default App;