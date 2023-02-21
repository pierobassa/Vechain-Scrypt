import React from "react";
import { Routes, Route, HashRouter as Router } from 'react-router-dom'
import { NoWallet, CreatePassword } from "../pages";
import '../assets/global.css'

const Popup = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<NoWallet />} />
				<Route path="/create_password" element={<CreatePassword />} />
			</Routes>
		</Router>
	)
};

export default Popup;