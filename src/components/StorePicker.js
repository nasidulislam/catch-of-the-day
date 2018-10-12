import React from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
	goToStore = (event) => {
		const storeName = this.myInput.value.value;

		event.preventDefault();
		this.props.history.push(`/store/${storeName}`);
	};

	myInput = React.createRef();

	render() {
		return (
			<form className='store-selector' onSubmit={this.goToStore}>
				<h2>Please Enter a Store</h2>
				<input
					type='text'
					required
					placeholder='Store Name'
					ref={this.myInput}
					defaultValue={getFunName()}/>
				<button type='submit'>Visit Store</button>
			</form>
		)
	}
}

export default StorePicker;