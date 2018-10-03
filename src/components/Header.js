import React from 'react';

// this is a component that doesn't have a state or dynamic data
// so it can be a stateless function component

const Header = props => {
	return (
		<header className='top'>
			<h1>Catch
				<span className='ofThe'>
						<span className='of'>Of</span>
						<span className='the'>The</span>
					</span>
				Day
			</h1>
			<h3 className='tagline'>
				<span>{props.tagline}</span>
			</h3>
		</header>
	)
};

export default Header;