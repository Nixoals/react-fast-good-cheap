import { useState } from 'react';
import './App.css';
import FastGoodCheap from './components/FastGoodCheap';
import Footer from './components/Footer';

function App() {
	const [redActivate, setRedActive] = useState(false);
	const [greenActivate, setGreenActive] = useState(false);
	const [blueActivate, setBlueActive] = useState(false);

	return (
		<>
			<div className="button-wrapper">
				<div
					onClick={() => {
						setRedActive(!redActivate);
						if (greenActivate && blueActivate) {
							const randomChoice = Math.round(Math.random());
							if (randomChoice === 0) {
								setGreenActive(false);
							} else {
								setBlueActive(false);
							}
						}
					}}
				>
					<FastGoodCheap title={'FAST'} color={{ button: '#84575E', circle: '#A1484F' }} isActivated={redActivate}></FastGoodCheap>
				</div>
				<div
					onClick={() => {
						setGreenActive(!greenActivate);
						if (redActivate && blueActivate) {
							const randomChoice = Math.round(Math.random());
							if (randomChoice === 0) {
								setBlueActive(false);
							} else {
								setRedActive(false);
							}
						}
					}}
				>
					<FastGoodCheap title={'GOOD'} color={{ button: '#88A97A', circle: '#80C265' }} isActivated={greenActivate}></FastGoodCheap>
				</div>
				<div
					onClick={() => {
						setBlueActive(!blueActivate);
						if (redActivate && greenActivate) {
							const randomChoice = Math.round(Math.random());
							if (randomChoice === 0) {
								setRedActive(false);
							} else {
								setGreenActive(false);
							}
						}
					}}
				>
					<FastGoodCheap title={'CHEAP'} color={{ button: '#4D68A3', circle: '#58698D' }} isActivated={blueActivate}></FastGoodCheap>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
}

export default App;
