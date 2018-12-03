import React from 'react';

class EditFishForm extends React.Component {
    handleChange = (event) => {
        const currentTarget = event.currentTarget;
        // update fish in state
        // 1. take a copy of updated fish and update the one input that changed
        const updatedFish = { 
            ...this.props.fish,
            [currentTarget.name]: currentTarget.value
        };

        this.props.updateFish(this.props.index, updatedFish);
    }
    render() {
        const fish = this.props.fish;
        return (
            <div className='fish-edit'>
                <input 
                    type='text'
                    name='name'
                    onChange={this.handleChange}
                    value={fish.name} />
                <input 
                    type='text'
                    name='price'
                    onChange={this.handleChange}
                    value={fish.price} />
                <select 
                    type='text'
                    name='status'
                    onChange={this.handleChange}
                    value={fish.status}>
                    <option value='available'>Fresh</option>
					<option value='unavailable'>Sold Out !!</option>
                </select>
                <textarea 
                    type='text'
                    name='desc'
                    onChange={this.handleChange}
                    value={fish.desc} />
                <input 
                    type='text'
                    name='image'
                    onChange={this.handleChange}
                    value={fish.image} />
            </div>
        )
    }
}

export default EditFishForm;