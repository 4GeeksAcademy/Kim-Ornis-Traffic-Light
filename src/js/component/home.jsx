import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	const [light, setLight] = useState('')
	// let redExtraClass = '';
	// if(this.state.clickedLight == 'red') redExtraClass = 'selected';
	// let yellowExtraClass = '';
	// if(this.state.clickedLight == 'yellow') yellowExtraClass = 'selected';
	// let greenExtraClass = '';
	// if(this.state.clickedLight == 'green') greenExtraClass = 'selected';

	return (
		<div>
			<div id="trafficTop"></div>
			<div id="container">
				<div className={(light === 'red') ? "red light selected" : "red light"} onClick={()=> setLight('red')}></div>
				<div className={(light === 'yellow') ? "yellow light selected" : "yellow light"} onClick={()=> setLight('yellow')}></div>
				<div className={(light === 'green') ? "green light selected" : "green light"} onClick={()=> setLight('green')}></div>
			</div>
		</div>
	);
};

export default Home;
