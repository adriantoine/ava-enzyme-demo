import React, {PropTypes} from 'react';

const propTypes = {
	children: PropTypes.any
};

class Foo extends React.Component {
	render() {
		return (
			<div className="foo">
				{this.props.children}
			</div>
		);
	}
}

Foo.propTypes = propTypes;

export default Foo;
