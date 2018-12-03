import React from 'react';
// components
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};

	// syncing state with database when app is mounting
	componentDidMount() {
		const storeId = this.props.match.params.storeId;
		// first re-instate local localStorage
		const localStorageRef = localStorage.getItem(storeId);
		if(localStorageRef) {
			this.setState({order: JSON.parse(localStorageRef)});
		}

		this.ref = base.syncState(`${storeId}/fishes`, {
			context: this,
			state: 'fishes'
		});
	}

	// save order state data when app updates
	componentDidUpdate() {
		localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
	}

	// cleaning up to avoid memory leaks when app has unmounted
	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

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

	updateFish = (key, updatedFish) => {
		// take copy of current state
		const fishes = { ...this.state.fishes };
		// update that state
		fishes[key] = updatedFish;
		// set state
		this.setState({ fishes });
	}

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
					updateFish={this.updateFish}
					loadSampleFishes={this.loadSampleFishes}
					fishes={this.state.fishes}
				/>
			</div>
		)
	}
}

export default App;
