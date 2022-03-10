
import React, { useEffect, useState } from "react";
import './styles/App.css';
import twitterLogo from './assets/twitter-logo.svg';
import { ethers } from "ethers";
import contractABI from './utils/contractABI.json';

import polygonLogo from './assets/polygonlogo.png';
import ethLogo from './assets/ethlogo.png';
import { networks } from './utils/networks';
// Constants
const TWITTER_HANDLE = 'elisha_bulalu';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const tld = '.ace';
const CONTRACT_ADDRESS = '0x8b3180600Ec9CD7BfDa6e26FD38E728B1918e7bB'; //deployed on polygon

const App = () => {
	



	// Render Methods
	const renderNotConnectedContainer = () => (
		<div className="connect-wallet-container">
			<img src="https://media.giphy.com/media/10UUe8ZsLnaqwo/giphy.gif" alt="Ninja donut gif" />
			{/* Call the connectWallet function we just wrote when the button is clicked */}
			

		</div>
	);

	// Form to enter domain name and data
	
	// This will take us into edit mode and show us the edit buttons!
	
  

	return (
		<div className="App">
			<div className="container">
				<div className="header-container">
					<header>
						<div className="left">
							<p className="title">Hey Fine face!!</p>
							<p className="subtitle">So being offline  is  simply just ummm ......., I got nothing just wanted to show off my coding stuff, See ya on the otherside
								
							</p>
						</div>
						{/* Display a logo and wallet connection status*/}
						
					</header>
				</div>

				
				
				{/* Hide the connect button if currentAccount isn't empty*/}
				{ renderNotConnectedContainer()}
				{/* Render the input form if an account is connected */}

				
				

				<div className="footer-container">
						
				</div>
			</div>
		</div>
	);
};

export default App;

