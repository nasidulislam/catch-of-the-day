import React from 'react';

class Fish extends React.Component {
    render() {
        return(
            <div className='single-fish'>{this.props.fishName}</div>
        )
    }
}

export default Fish;
