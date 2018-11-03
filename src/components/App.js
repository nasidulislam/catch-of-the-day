import React from 'react';
// components
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};

	// methods that change state
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

	addToOrder = (key) => {
		// 1. take a copy of state
		const order = { ...this.state.order }
		// 2. either add to order, or update the number in our order
		order[key] = order[key] + 1 || 1;
		// 3. call setState to update state object
		this.setState({ order });
	}

	loadSampleFishes  = () => {
		this.setState({fishes: sampleFishes});
	}

	// life cycle methods

	render() {
		return (
			<div className='catch-of-the-day'>
				<div className='menu'>
					<Header tagline="Fresh Seafood Market" />
					<ul className='fishes'>
						{Object.keys(this.state.fishes).map(key => (
							<Fish
								details={this.state.fishes[key]}
								key={key}
								index={key}
								addToOrder={this.addToOrder}
							/>
						))}
					</ul>
				</div>
				<Order
					fishes={this.state.fishes}
					order={this.state.order}
				/>
				<Inventory
					addFish={this.addFish}
					loadSampleFishes={this.loadSampleFishes}
				/>
			</div>
		)
	}
}

export default App;
