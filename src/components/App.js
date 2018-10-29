import React from 'react';
// components
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};

	addFish = (fish) => {
		// 1. take a copy of existing fishes
		const fishes = { ...this.state.fishes };

		// 2. add new fish to fishes variable created above
		fishes[`fish${Date.now()}`] = fish;

		// 3. set the new fishes object into state
		this.setState({ fishes }); // same as the lines below
		// this.setState({
		// 	fishes: fishes
		// })
	};

	loadSampleFishes  = () => {
		this.setState({fishes: sampleFishes});
	}

	render() {
		return (
			<div className='catch-of-the-day'>
				<div className='menu'>
					<Header tagline="Fresh Seafood Market" />
				</div>
				<Order />
				<Inventory
					addFish={this.addFish}
					loadSampleFishes={this.loadSampleFishes}
				/>
			</div>
		)
	}
}

export default App;
