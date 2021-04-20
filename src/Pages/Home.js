import React from "react";
import { Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
const Home = () => {
	return (
		<Container>
			<header className="App-header">
				<p>Another Implementation Obviously</p>
			</header>
			<main>
				<p>Roger's Indicator of Multiple Intelligences</p>
				<Link to="/question/1">Start</Link>
			</main>
		</Container>
	);
};

export default Home;
